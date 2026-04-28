import 'package:areti_vitae_mobile/views/esqueciSenha.dart';
import 'package:areti_vitae_mobile/views/login.dart';
import 'package:flutter/material.dart';

class Cadastro extends StatefulWidget {
  const Cadastro({super.key});

  @override
  State<Cadastro> createState() => _CadastroState();
}

class _CadastroState extends State<Cadastro> {
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

                      //Input Nome ou Apelido
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
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
                              fillColor: Colors.white70,
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      //Input Email
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            obscureText: true,
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
                              fillColor: Colors.white70,
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      //Input Data de Nascimento
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            obscureText: true,
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
                              fillColor: Colors.white70,
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      //Input Senha
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
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
                              fillColor: Colors.white70,
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      //Input Confirmar Senha
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
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
                              fillColor: Colors.white70,
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      //Já tem conta
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

                      //Botão Cadastrar
                      ElevatedButton(
                        onPressed: () {
                          setState(() {});
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

          // IMAGEM
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
