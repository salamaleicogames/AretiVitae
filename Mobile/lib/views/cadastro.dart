import 'dart:developer';

import 'package:areti_vitae_mobile/model/user_model.dart';
import 'package:areti_vitae_mobile/views/login.dart';
import 'package:flutter/material.dart';

class Cadastro extends StatefulWidget {
  const Cadastro({super.key});

  @override
  State<Cadastro> createState() => _CadastroState();
}

class _CadastroState extends State<Cadastro> {
  final GlobalKey<FormState> cadastroKey = GlobalKey<FormState>();

  TextEditingController txtNome = TextEditingController();
  TextEditingController txtEmail = TextEditingController();
  TextEditingController txtData = TextEditingController();
  TextEditingController txtSenha = TextEditingController();
  TextEditingController txtConfirmarSenha = TextEditingController();

  List<UserModel> user = [];

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
    for (UserModel u in user) {
      print("USUÁRIO CADASTRADO!");
      print("${u.usuario} - ${u.email} - ${u.senha} - ${u.idade}");
    }
  }

  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.of(context).size.height;
    final double lightHeight = screenHeight * 0.2;
    final double headerHeight = screenHeight * 0.31;

    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: Color.fromRGBO(88, 112, 184, 1),
      body: SingleChildScrollView(
        padding: EdgeInsets.only(
          bottom: MediaQuery.of(context).viewInsets.bottom,
        ),
        child: Column(
          children: [
            // CABEÇALHO
            SizedBox(
              height: headerHeight,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  Column(
                    children: [
                      // PARTE DE CIMA
                      Container(
                        height: lightHeight,
                        width: double.infinity,
                        color: Color.fromRGBO(143, 197, 255, 1),
                      ),

                      Container(
                        height: headerHeight - lightHeight,
                        width: double.infinity,
                        color: Color.fromRGBO(88, 112, 184, 1),
                      ),
                    ],
                  ),

                  // LOGO
                  Positioned(
                    top: screenHeight * 0.01,
                    left: 0,
                    right: 0,
                    child: Center(
                      child: Image.asset("assets/images/logo1.png", width: 200),
                    ),
                  ),
                ],
              ),
            ),

            //FORMULÁRIO
            Container(
              width: double.infinity,
              color: Color.fromRGBO(88, 112, 184, 1),
              child: Column(
                children: [
                  SizedBox(height: 60),

                  Form(
                    key: cadastroKey,
                    child: Column(
                      children: [
                        //INPUT USERNAME
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 30),
                          child: TextFormField(
                            controller: txtNome,
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

                            //VALIDAÇÃO NOME DE USUÁRIO
                            validator: (value) {
                              if (value!.isEmpty) {
                                return "Informe um nome de usuário";
                              }

                              return null;
                            },
                          ),
                        ),

                        SizedBox(height: 15),

                        // Input Email
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

                            //VALIDAÇÃO EMAIL
                            validator: (value) {
                              if (value!.isEmpty) {
                                return "Informe um e-mail";
                              }

                              if (!value.contains("@")) {
                                return "E-mail inválido";
                              }

                              return null;
                            },
                          ),
                        ),

                        SizedBox(height: 15),

                        // INPUT DATA
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 30),
                          child: TextFormField(
                            controller: txtData,
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

                            //VALIDAÇÃO DE DATA DE NASCIMENTO
                            validator: (value) {
                              if (value!.isEmpty) {
                                return "Informe a data de nascimento";
                              }

                              return null;
                            },
                          ),
                        ),

                        SizedBox(height: 15),

                        //INPUT SENHA
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 30),
                          child: TextFormField(
                            controller: txtSenha,
                            style: TextStyle(
                              fontFamily: "Josefin",
                              fontSize: 15,
                            ),
                            obscureText: true,
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

                            validator: (value) {
                              if (value!.isEmpty) {
                                return "Digite uma senha";
                              }

                              if (value.length < 4) {
                                return "A senha deve ter pelo menos 4 caracteres";
                              }

                              return null;
                            },
                          ),
                        ),

                        SizedBox(height: 15),

                        // INPUT CONFIRMAR SENHA
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 30),
                          child: TextFormField(
                            controller: txtConfirmarSenha,
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
                              hintText: "Confirmar Senha",
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                            validator: (value) {
                              if (value!.isEmpty) {
                                return "Confirme a senha";
                              }

                              if (value != txtSenha.text) {
                                return "As senhas não coincidem";
                              }

                              return null;
                            },
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
                          onPressed: () {
                            if (cadastroKey.currentState!.validate()) {
                              UserModel novoUsuario = UserModel.user(
                                txtNome.text,
                                txtEmail.text,
                                int.parse(txtData.text),
                                txtSenha.text,
                              );

                              user.add(novoUsuario);

                              exibir();

                              setState(() {});
                            }
                          },
                          child: Text(
                            "Cadastrar",
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              fontWeight: FontWeight.bold,
                              fontSize: 18,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),

                  // Input Nome
                  SizedBox(height: 50),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
