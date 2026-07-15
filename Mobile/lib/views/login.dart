import 'package:areti_vitae_mobile/views/cadastro.dart';
import 'package:areti_vitae_mobile/views/configuracoes.dart';
import 'package:areti_vitae_mobile/views/esqueciSenha.dart';
import 'package:areti_vitae_mobile/views/home.dart';
import 'package:flutter/material.dart';
import 'package:areti_vitae_mobile/model/user_model.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final GlobalKey<FormState> loginKey = GlobalKey<FormState>();

  TextEditingController txtUser = TextEditingController();
  TextEditingController txtSenha = TextEditingController();

  List<UserModel> login = [
    UserModel.login("Mauricio", "senha"),
    UserModel.login("João", "senha"),
    UserModel.login("Priscila", "senha"),
  ];

  //Autenticação do Usuário
  void autenticacaoUser() {
    if (loginKey.currentState!.validate()) {
      bool loginCorreto = false;

      for (UserModel u in login) {
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
                Container(
                  height: 180,
                  width: double.infinity,
                  color: Color.fromRGBO(74, 84, 131, 1),
                  child: Align(
                    alignment: Alignment.topLeft,
                    child: Padding(
                      padding: const EdgeInsets.only(left: 20),
                      child: GestureDetector(
                        onTap: () => Navigator.pop(context),
                        child: const Text(
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

                                  for (UserModel u in login) {
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
            top: MediaQuery.of(context).size.height * 0.15,
            left: 0,
            right: 0,
            child: Center(
              child: Container(
                decoration: BoxDecoration(
                  color: const Color.fromRGBO(208, 227, 255, 0.8),
                  borderRadius: BorderRadius.circular(15),
                ),
                padding: const EdgeInsets.all(10),

                child: Image.asset("assets/images/alter2.png", width: 200),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
