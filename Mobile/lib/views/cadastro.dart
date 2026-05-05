import 'dart:developer';

import 'package:areti_vitae_mobile/model/usuario.dart';
import 'package:areti_vitae_mobile/views/login.dart';
import 'package:flutter/material.dart';

class Cadastro extends StatefulWidget {
  const Cadastro({super.key});

  @override
  State<Cadastro> createState() => _CadastroState();
}

class _CadastroState extends State<Cadastro> {
  TextEditingController txtNome = TextEditingController();
  TextEditingController txtEmail = TextEditingController();
  TextEditingController txtData = TextEditingController();
  TextEditingController txtSenha = TextEditingController();
  TextEditingController txtConfirmarSenha = TextEditingController();

  List<Usuario> user = [];

  @override
  void dispose() {
    txtNome.dispose();
    txtEmail.dispose();
    txtData.dispose();
    txtSenha.dispose();
    txtConfirmarSenha.dispose();
    super.dispose();
  }

  // Apenas exibe os usuários no console
  void exibir() {
    for (Usuario u in user) {
      log("USUÁRIO CADASTRADO!");
      log("${u.usuario} - ${u.email} - ${u.data}");
    }
  }

  void cadastrar() {
    String nome = txtNome.text;
    String email = txtEmail.text;
    String data = txtData.text;
    String senha = txtSenha.text;
    String confirmar = txtConfirmarSenha.text;

    if (nome.isEmpty ||
        email.isEmpty ||
        data.isEmpty ||
        senha.isEmpty ||
        confirmar.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            "Preencha os campos vazios!",
            style: TextStyle(color: Colors.black),
          ),
          backgroundColor: Colors.yellow,
          duration: Duration(seconds: 2),
        ),
      );
      return;
    }

    if (senha != confirmar) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("As senhas não coincidem!"),
          backgroundColor: Colors.red,
          duration: Duration(seconds: 2),
        ),
      );
      return;
    }

    Usuario us = Usuario(nome, email, data);
    user.add(us);

    log("Cadastro realizado com sucesso!");
    exibir();

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text("Cadastro realizado com sucesso!"),
        backgroundColor: Colors.green,
        duration: Duration(seconds: 2),
      ),
    );

    // Limpar campos
    txtNome.clear();
    txtEmail.clear();
    txtData.clear();
    txtSenha.clear();
    txtConfirmarSenha.clear();

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: true,
      backgroundColor: Color.fromRGBO(88, 112, 184, 1),
      body: Stack(
        children: [
          SingleChildScrollView(
            child: Column(
              children: [
                // PARTE DE CIMA
                Container(
                  height: MediaQuery.of(context).size.height * 0.2,
                  color: Color.fromRGBO(143, 197, 255, 1),
                ),

                // PARTE DE BAIXO
                Container(
                  color: Color.fromRGBO(88, 112, 184, 1),
                  child: Column(
                    children: [
                      SizedBox(height: 100),

                      // Input Nome
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtNome,
                            style: TextStyle(
                              fontFamily: "Josefin",
                              fontSize: 15,
                            ),
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              hint: Text(
                                "Nome ou Apelido",
                                style: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                              ),
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      // Input Email
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtEmail,
                            style: TextStyle(
                              fontFamily: "Josefin",
                              fontSize: 15,
                            ),
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              hint: Text(
                                "Email",
                                style: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                              ),
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      // Input Data
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtData,
                            style: TextStyle(
                              fontFamily: "Josefin",
                              fontSize: 15,
                            ),
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              hint: Text(
                                "Data de Nascimento",
                                style: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                              ),
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      // Input Senha
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtSenha,
                            style: TextStyle(
                              fontFamily: "Josefin",
                              fontSize: 15,
                            ),
                            obscureText: true,
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              hint: Text(
                                "Senha",
                                style: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                              ),
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      // Input Confirmar senha
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtConfirmarSenha,
                            style: TextStyle(
                              fontFamily: "Josefin",
                              fontSize: 15,
                            ),
                            obscureText: true,
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              hint: Text(
                                "Confirmar Senha",
                                style: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                              ),
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      // Já tem conta
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            TextButton(
                              onPressed: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => Login(),
                                  ),
                                );
                              },
                              child: Text(
                                "Já tem uma Conta? Faça Login",
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

                      SizedBox(height: 60),

                      // Botão cadastrar
                      ElevatedButton(
                        onPressed: cadastrar,
                        child: Text(
                          "Cadastrar",
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

                      SizedBox(height: 50),
                    ],
                  ),
                ),
              ],
            ),
          ),

          // LOGO
          Positioned(
            top: MediaQuery.of(context).size.height * 0.02,
            left: 0,
            right: 0,
            child: Center(
              child: Image.asset("assets/images/logo1.png", width: 200),
            ),
          ),
        ],
      ),
    );
  }
}
