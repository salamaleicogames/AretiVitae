import 'package:areti_vitae_mobile/model/user_model.dart';
import 'package:areti_vitae_mobile/repository/user_repository.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Perfil extends StatefulWidget {
  const Perfil({super.key});

  @override
  State<Perfil> createState() => _PerfilState();
}

class _PerfilState extends State<Perfil> {
  TextEditingController txtUser = TextEditingController();
  TextEditingController txtEmail = TextEditingController();
  TextEditingController txtSenha = TextEditingController();
  TextEditingController txtConfirmarSenha = TextEditingController();

  UserModel? usuario;

  @override
  void initState() {
    super.initState();
    carregarPerfil();
  }

  Future<void> carregarPerfil() async {
    usuario = await UserRepository().carregarUsuario();

    setState(() {
      txtUser.text = usuario?.usuario ?? "";
      txtEmail.text = usuario?.email ?? "";
    });
  }

  @override
  void dispose() {
    txtUser.dispose();
    txtEmail.dispose();
    txtSenha.dispose();
    txtConfirmarSenha.dispose();
    super.dispose();
  }

  Future<void> salvarPerfil() async {
    String novaSenha = txtSenha.text;
    String confirmacao = txtConfirmarSenha.text;

    if (novaSenha.isNotEmpty) {
      if (novaSenha != confirmacao) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              "As senhas não coincidem!",
              style: TextStyle(color: Colors.black),
            ),
            backgroundColor: Colors.yellow,
            duration: Duration(seconds: 2),
          ),
        );
        return;
      }

      usuario!.senha = novaSenha;
    }

    final url = Uri.parse("http://localhost:8081/apiAv/Update/${usuario!.id}");
    final response = await http.put(
      url,
      headers: {"Content-Type": "application/json"},
      body: jsonEncode(usuario!.toJson()),
    );

    if (response.statusCode == 200 || response.statusCode == 201) {
      await UserRepository().salvarUsuario(usuario!);

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Dados atualizados com sucesso!"),
          backgroundColor: Colors.green,
          duration: Duration(seconds: 2),
          behavior: SnackBarBehavior.floating,
          margin: EdgeInsets.all(20),
        ),
      );

      txtSenha.clear();
      txtConfirmarSenha.clear();

      Navigator.pushNamed(context, "/home", arguments: usuario!.usuario);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Erro ao atualizar os dados"),
          backgroundColor: Colors.red,
          duration: Duration(seconds: 2),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Column(
            children: [
              Container(height: 150, color: Color.fromRGBO(77, 84, 131, 1)),

              Expanded(
                child: Container(
                  color: Color.fromRGBO(101, 123, 191, 1),
                  child: SingleChildScrollView(
                    child: Column(
                      children: [
                        SizedBox(height: 100),

                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 30),
                          child: SizedBox(
                            height: 40,
                            child: TextField(
                              controller: txtUser,
                              enabled: false,
                              style: TextStyle(
                                fontFamily: "Josefin",
                                fontSize: 15,
                              ),
                              decoration: InputDecoration(
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(15),
                                  borderSide: BorderSide.none,
                                ),
                                hintText: "Areti Vitae",
                                hintStyle: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                                filled: true,
                                fillColor: Color.fromRGBO(255, 255, 255, 0.6),
                              ),
                            ),
                          ),
                        ),

                        SizedBox(height: 10),
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 40),
                          child: Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              "Nome de usuário",
                              style: TextStyle(
                                fontFamily: "Montserrat",
                                fontSize: 15,
                                color: Color.fromRGBO(255, 255, 255, 0.9),
                              ),
                            ),
                          ),
                        ),

                        SizedBox(height: 25),

                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 30),
                          child: SizedBox(
                            height: 40,
                            child: TextField(
                              controller: txtEmail,
                              enabled: false,
                              style: TextStyle(
                                fontFamily: "Josefin",
                                fontSize: 15,
                              ),
                              decoration: InputDecoration(
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(15),
                                  borderSide: BorderSide.none,
                                ),
                                hintText: "aretivitae@gmail.com",
                                hintStyle: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                                filled: true,
                                fillColor: Color.fromRGBO(255, 255, 255, 0.6),
                              ),
                            ),
                          ),
                        ),

                        SizedBox(height: 10),
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 40),
                          child: Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              "Email cadastrado",
                              style: TextStyle(
                                fontFamily: "Montserrat",
                                fontSize: 15,
                                color: Color.fromRGBO(255, 255, 255, 0.9),
                              ),
                            ),
                          ),
                        ),

                        SizedBox(height: 25),

                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 30),
                          child: SizedBox(
                            height: 40,
                            child: TextField(
                              controller: txtSenha,
                              obscureText: true,
                              style: TextStyle(
                                fontFamily: "Josefin",
                                fontSize: 15,
                              ),
                              decoration: InputDecoration(
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(15),
                                  borderSide: BorderSide.none,
                                ),
                                hintText: "Nova senha",
                                hintStyle: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                                filled: true,
                                fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                              ),
                            ),
                          ),
                        ),

                        SizedBox(height: 10),
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 40),
                          child: Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              "Nova senha",
                              style: TextStyle(
                                fontFamily: "Montserrat",
                                fontSize: 15,
                                color: Color.fromRGBO(255, 255, 255, 0.9),
                              ),
                            ),
                          ),
                        ),

                        SizedBox(height: 25),

                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 30),
                          child: SizedBox(
                            height: 40,
                            child: TextField(
                              controller: txtConfirmarSenha,
                              obscureText: true,
                              style: TextStyle(
                                fontFamily: "Josefin",
                                fontSize: 15,
                              ),
                              decoration: InputDecoration(
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(15),
                                  borderSide: BorderSide.none,
                                ),
                                hintText: "Confirme a nova senha",
                                hintStyle: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                                filled: true,
                                fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                              ),
                            ),
                          ),
                        ),

                        SizedBox(height: 10),
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 40),
                          child: Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              "Confirmar nova senha",
                              style: TextStyle(
                                fontFamily: "Montserrat",
                                fontSize: 15,
                                color: Color.fromRGBO(255, 255, 255, 0.9),
                              ),
                            ),
                          ),
                        ),

                        SizedBox(height: 25),

                        ElevatedButton(
                          onPressed: () async {
                            await salvarPerfil();
                            setState(() {});
                          },
                          child: Text(
                            "Salvar",
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              fontWeight: FontWeight.bold,
                              fontSize: 18,
                              color: Colors.white,
                            ),
                          ),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                            minimumSize: Size(280, 48),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(12),
                            ),
                          ),
                        ),

                        SizedBox(height: 40),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),

          Positioned(
            top: 80,
            left: 0,
            right: 0,
            child: Center(
              child: Container(
                width: 150,
                height: 150,
                padding: EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(25),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black26,
                      blurRadius: 10,
                      offset: Offset(0, 4),
                    ),
                  ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.asset(
                    "assets/images/alter2.png",
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
