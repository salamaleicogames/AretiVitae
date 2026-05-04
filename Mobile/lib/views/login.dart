import 'package:areti_vitae_mobile/views/cadastro.dart';
import 'package:areti_vitae_mobile/views/configuracoes.dart';
import 'package:areti_vitae_mobile/views/esqueciSenha.dart';
import 'package:areti_vitae_mobile/views/home.dart';
import 'package:areti_vitae_mobile/views/network.dart';
import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  TextEditingController txtUser = TextEditingController();
  TextEditingController txtSenha = TextEditingController();

  void autenticacaoUser() {
    if (txtUser.text == "" || txtSenha.text == "") {
      print("Preencha os campos vazios!");
    } else {
      if (txtUser.text == "user" && txtSenha.text == "senha") {
        print("Usuário '" + txtUser.text + "' conectado");
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => Home()),
        );
      } else {
        print("Usuário ou Senha incorretos!");
      }
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
                Container(height: 150, color: Color.fromRGBO(143, 197, 255, 1)),

                // PARTE DE BAIXO
                Container(
                  width: double.infinity,
                  color: Color.fromRGBO(88, 112, 184, 1),
                  child: Column(
                    children: [
                      SizedBox(height: 150),

                      // INPUT USER
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtUser,
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              hint: Text(
                                "Username",
                                style: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                ),
                              ),
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                              prefixIcon: Icon(Icons.person),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 45),

                      // INPUT SENHA
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtSenha,
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
                              prefixIcon: Icon(Icons.key_off),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 15),

                      // LINKS
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
                                    builder: (context) => EsqueciSenha(),
                                  ),
                                );
                              },
                              child: Text(
                                "Esqueci minha senha",
                                style: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                  color: Colors.white,
                                ),
                              ),
                            ),
                            TextButton(
                              onPressed: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => Cadastro(),
                                  ),
                                );
                              },
                              child: Text(
                                "Criar conta",
                                style: TextStyle(
                                  fontFamily: "Josefin",
                                  fontSize: 15,
                                  color: Colors.white,
                                ),
                              ),
                            ),

                            TextButton(
                              onPressed: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => Net(),
                                  ),
                                );
                              },
                              child: Text(
                                "Netowork",
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

                      // BOTÃO
                      ElevatedButton(
                        onPressed: () {
                          autenticacaoUser();
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

          // IMAGEM SOBREPOSTA
          Positioned(
            top: MediaQuery.of(context).size.height * 0.1,
            left: 0,
            right: 0,
            child: Center(
              child: Image.asset("assets/images/alter2.png", width: 200),
            ),
          ),
        ],
      ),
    );
  }
}
