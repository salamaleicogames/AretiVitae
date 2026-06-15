import 'package:areti_vitae_mobile/views/cadastro.dart';
import 'package:areti_vitae_mobile/views/configuracoes.dart';
import 'package:areti_vitae_mobile/views/esqueciSenha.dart';
import 'package:areti_vitae_mobile/views/home.dart';
import 'package:flutter/material.dart';
import 'package:areti_vitae_mobile/model/cLogin.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final GlobalKey<FormState> loginKey = GlobalKey<FormState>();

  TextEditingController txtUser = TextEditingController();
  TextEditingController txtSenha = TextEditingController();

  List<Clogin> login = [
    Clogin("Mauricio", "senha"),
    Clogin("João", "senha"),
    Clogin("Priscila", "senha"),
  ];

  //Autenticação do Usuário
  void autenticacaoUser() {
    if (loginKey.currentState!.validate()) {
      bool loginCorreto = false;

      for (Clogin u in login) {
        if (u.usuario == txtUser.text && u.senha == txtSenha.text) {
          loginCorreto = true;
        }
      }

      if (loginCorreto) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text("Login realizado com sucesso!"),
            backgroundColor: Colors.green,
          ),
        );

        Future.delayed(Duration(seconds: 2), () {
          Navigator.pushNamed(context, "/home", arguments: txtUser.text);
        });
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text("Senha incorreta!"),
            backgroundColor: Colors.red,
          ),
        );
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

                      Form(
                        key: loginKey,
                        child: Column(
                          children: [
                            // INPUT USERNAME
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 30),
                              child: TextFormField(
                                controller: txtUser,
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
                                  hintText: "Username",
                                  filled: true,
                                  fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                                  prefixIcon: Icon(Icons.person),
                                ),

                                //VALIDAÇÃO DE USUÁRIO
                                validator: (value) {
                                  if (value!.isEmpty) {
                                    return "Informe o usuário";
                                  }

                                  bool existe = false;

                                  for (Clogin u in login) {
                                    if (u.usuario == value) {
                                      existe = true;
                                    }
                                  }

                                  if (!existe) {
                                    return "Usuário não cadastrado";
                                  }

                                  return null;
                                },
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
