import 'package:areti_vitae_mobile/repository/user_repository.dart';
import 'package:areti_vitae_mobile/views/cadastro.dart';
import 'package:areti_vitae_mobile/views/configuracoes.dart';
import 'package:areti_vitae_mobile/views/esqueciSenha.dart';
import 'package:areti_vitae_mobile/views/home.dart';
import 'package:flutter/material.dart';
import 'package:areti_vitae_mobile/model/user_model.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:http/http.dart' as http;
import 'dart:convert';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

//Tela de Login do usuário
class _LoginState extends State<Login> {
  final GlobalKey<FormState> loginKey = GlobalKey<FormState>();

  TextEditingController txtEmail = TextEditingController();
  TextEditingController txtSenha = TextEditingController();

  UserModel usuario = UserModel();

  Future<void> realizarLogin() async {
    final url = Uri.parse("http://localhost:8081/apiAv/Login");

    final response = await http.post(
      url,
      headers: {"Content-Type": "application/json"},
      body: jsonEncode({"email": txtEmail.text, "senha": txtSenha.text}),
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      usuario = UserModel.fromJson(data);

      await UserRepository().salvarUsuario(usuario);

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            "Login realizado com sucesso!",
            style: TextStyle(
              fontFamily: "Montserrat",
              fontWeight: FontWeight.bold,
            ),
          ),
          backgroundColor: Color.fromARGB(255, 78, 190, 82),
        ),
      );

      Future.delayed(Duration(seconds: 2), () {
        Navigator.pushNamed(
          context,
          "/home",
          arguments: usuario.usuario.toString(),
        );
      });
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            "Usuário ou Senha incorretos",
            style: TextStyle(
              fontFamily: "Montserrat",
              fontWeight: FontWeight.bold,
            ),
          ),
          backgroundColor: Color.fromRGBO(235, 103, 129, 1),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(88, 112, 184, 1),
      body: Stack(
        children: [
          SingleChildScrollView(
            child: Column(
              children: [
                // PARTE DE CIMA
                Container(
                  height: 180,
                  width: double.infinity,
                  color: Color.fromRGBO(74, 84, 131, 1),
                  child: Align(
                    alignment: Alignment.topLeft,
                    child: Padding(
                      padding: EdgeInsets.only(left: 20),
                      child: GestureDetector(
                        onTap: () => Navigator.pop(context),
                        child: Text(
                          "<",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            fontSize: 30,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),

                // PARTE DE BAIXO
                Container(
                  width: double.infinity,
                  color: Color.fromRGBO(88, 112, 184, 1),
                  child: Column(
                    children: [
                      SizedBox(height: 150),

                      Form(
                        key: loginKey,
                        child: Column(
                          children: [
                            // INPUT USERNAME
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 30),
                              child: TextFormField(
                                controller: txtEmail,
                                style: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                                decoration: InputDecoration(
                                  isDense: true,
                                  contentPadding: EdgeInsets.symmetric(
                                    horizontal: 16,
                                    vertical: 12,
                                  ),
                                  border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(15),
                                    borderSide: BorderSide.none,
                                  ),
                                  hintText: "Email",
                                  filled: true,
                                  fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                                  prefixIcon: Icon(Icons.mail),
                                ),
                              ),
                            ),

                            SizedBox(height: 45),

                            // INPUT SENHA
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 30),
                              child: Column(
                                children: [
                                  TextFormField(
                                    controller: txtSenha,
                                    obscureText: true,
                                    style: TextStyle(
                                      fontFamily: "Josefin",
                                      fontSize: 15,
                                    ),
                                    decoration: InputDecoration(
                                      isDense: true,
                                      contentPadding: EdgeInsets.symmetric(
                                        horizontal: 16,
                                        vertical: 12,
                                      ),
                                      border: OutlineInputBorder(
                                        borderRadius: BorderRadius.circular(15),
                                        borderSide: BorderSide.none,
                                      ),
                                      hintText: "Senha",
                                      filled: true,
                                      fillColor: Color.fromRGBO(
                                        255,
                                        255,
                                        255,
                                        0.9,
                                      ),
                                      prefixIcon: Icon(Icons.key_off),
                                    ),
                                    validator: (value) {
                                      if (value!.isEmpty) {
                                        return "Digite a senha";
                                      }

                                      if (value.length < 4) {
                                        return "A senha deve ter pelo menos 4 caracteres";
                                      }

                                      return null;
                                    },
                                  ),
                                ],
                              ),
                            ),

                            SizedBox(height: 15),

                            // LINKS
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 30),
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Align(
                                    alignment: Alignment.centerLeft,
                                    child: TextButton(
                                      onPressed: () {
                                        Navigator.pushNamed(
                                          context,
                                          "/esqueciSenha",
                                        );
                                      },
                                      child: Text(
                                        "Esqueceu sua senha?",
                                        style: TextStyle(
                                          fontFamily: "Josefin",
                                          fontSize: 15,
                                          color: Colors.white,
                                        ),
                                      ),
                                    ),
                                  ),

                                  SizedBox(width: 30),

                                  TextButton(
                                    onPressed: () {
                                      Navigator.pushNamed(context, "/cadastro");
                                    },
                                    child: Text(
                                      "Ainda não tem uma conta?",
                                      style: TextStyle(
                                        fontFamily: "Josefin",
                                        fontSize: 15,
                                        color: Colors.white,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),

                            SizedBox(height: 20),

                            // BOTÃO
                            ElevatedButton(
                              onPressed: () async {
                                await realizarLogin();
                              },
                              child: Text(
                                "Imergir",
                                style: TextStyle(
                                  fontFamily: "Montserrat",
                                  fontWeight: FontWeight.bold,
                                  fontSize: 18,
                                  color: Colors.white,
                                ),
                              ),
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Color.fromRGBO(
                                  145,
                                  205,
                                  255,
                                  1,
                                ),
                                minimumSize: Size(280, 48),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(12),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),

                      SizedBox(height: 50),
                    ],
                  ),
                ),
              ],
            ),
          ),

          // IMAGEM SOBREPOSTA
          Positioned(
            top: MediaQuery.of(context).size.height * 0.15,
            left: 0,
            right: 0,
            child: Center(
              child: Container(
                decoration: BoxDecoration(
                  color: Color.fromRGBO(208, 227, 255, 0.8),
                  borderRadius: BorderRadius.circular(15),
                ),
                padding: EdgeInsets.all(10),

                child: Image.asset("assets/images/alter2.png", width: 200),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
