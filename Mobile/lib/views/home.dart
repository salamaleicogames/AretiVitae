import 'package:areti_vitae_mobile/views/ajuda.dart';
import 'package:areti_vitae_mobile/views/configuracoes.dart';
import 'package:areti_vitae_mobile/views/login.dart';
import 'package:areti_vitae_mobile/views/perfil.dart';
import 'package:flutter/material.dart';

// ==========================================
// PRIMEIRA TELA (HOME)
// ==========================================
class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    final String nomeUsuario =
        ModalRoute.of(context)!.settings.arguments as String? ?? "Usuário";

    return Scaffold(
      backgroundColor: Color.fromRGBO(88, 112, 184, 1),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            children: [
              Padding(
                padding: EdgeInsets.all(45),
                child: Column(
                  children: [
                    // BOX DE PERFIL
                    Container(
                      padding: EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Color.fromRGBO(148, 191, 255, 0.8),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Row(
                        children: [
                          SizedBox(width: 10),

                          GestureDetector(
                            onTap: () {
                              Navigator.pushNamed(context, "/perfil");
                            },
                            child: Image.asset(
                              "assets/images/alter2.png",
                              width: 75,
                            ),
                          ),

                          SizedBox(width: 55),
                          Text(
                            nomeUsuario,
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              fontWeight: FontWeight.bold,
                              fontSize: 35,
                              color: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ],
                      ),
                    ),

                    SizedBox(height: 40),

                    // BOX DE GALERIA
                    Container(
                      padding: EdgeInsets.all(30),
                      decoration: BoxDecoration(
                        color: Color.fromRGBO(148, 191, 255, 0.8),
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              // PERFIL
                              GestureDetector(
                                onTap: () {
                                  Navigator.pushNamed(context, "/perfil");
                                },
                                child: Column(
                                  children: [
                                    Container(
                                      color: Color.fromRGBO(
                                        208,
                                        227,
                                        255,
                                        0.75,
                                      ),
                                      child: Padding(
                                        padding: EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/saveIcon.png",
                                          width: 75,
                                        ),
                                      ),
                                    ),
                                    SizedBox(height: 5),
                                    Text(
                                      "Perfil",
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        fontSize: 16,
                                        fontWeight: FontWeight.w500,
                                        letterSpacing: 0.5,
                                        color: Color.fromRGBO(
                                          255,
                                          255,
                                          255,
                                          0.9,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),

                              SizedBox(width: 100),

                              // CONFIGURAÇÕES
                              GestureDetector(
                                onTap: () {
                                  Navigator.pushNamed(
                                    context,
                                    "/configuracoes",
                                  );
                                },
                                child: Column(
                                  children: [
                                    Container(
                                      color: Color.fromRGBO(
                                        208,
                                        227,
                                        255,
                                        0.75,
                                      ),
                                      child: Padding(
                                        padding: EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/configIcon.png",
                                          width: 75,
                                        ),
                                      ),
                                    ),
                                    SizedBox(height: 5),
                                    Text(
                                      "Configurações",
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        fontSize: 16,
                                        fontWeight: FontWeight.w500,
                                        letterSpacing: 0.5,
                                        color: Color.fromRGBO(
                                          255,
                                          255,
                                          255,
                                          0.9,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),

                          SizedBox(height: 40),

                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              // AJUDA
                              GestureDetector(
                                onTap: () {
                                  Navigator.pushNamed(context, "/ajuda");
                                },
                                child: Column(
                                  children: [
                                    Container(
                                      color: Color.fromRGBO(
                                        208,
                                        227,
                                        255,
                                        0.75,
                                      ),
                                      child: Padding(
                                        padding: EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/help.png",
                                          width: 75,
                                          height: 70,
                                        ),
                                      ),
                                    ),
                                    SizedBox(height: 5),
                                    Text(
                                      "Ajuda",
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        fontSize: 16,
                                        fontWeight: FontWeight.w500,
                                        letterSpacing: 0.5,
                                        color: Color.fromRGBO(
                                          255,
                                          255,
                                          255,
                                          0.9,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),

                              SizedBox(width: 100),

                              //NOTAS
                              GestureDetector(
                                onTap: () {
                                  Navigator.pushNamed(context, "/notas");
                                },
                                child: Column(
                                  children: [
                                    Container(
                                      color: Color.fromRGBO(
                                        208,
                                        227,
                                        255,
                                        0.75,
                                      ),
                                      child: Padding(
                                        padding: EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/noteIcon.png",
                                          width: 75,
                                        ),
                                      ),
                                    ),
                                    SizedBox(height: 5),
                                    Text(
                                      "Notes",
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        fontSize: 16,
                                        fontWeight: FontWeight.w500,
                                        letterSpacing: 0.5,
                                        color: Color.fromRGBO(
                                          255,
                                          255,
                                          255,
                                          0.9,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),

                    SizedBox(height: 45),

                    // BOX NETWORK
                    GestureDetector(
                      onTap: () {
                        Navigator.pushNamed(context, "/creditos");
                      },
                      child: Container(
                        padding: EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: Color.fromRGBO(148, 191, 255, 1),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SizedBox(width: 10),
                            Row(
                              children: [
                                Icon(
                                  Icons.groups_2_rounded,
                                  color: Colors.white,
                                ),

                                SizedBox(width: 5),

                                Text(
                                  "Créditos",
                                  style: TextStyle(
                                    fontFamily: "Montserrat",
                                    color: Colors.white,
                                    fontSize: 20,
                                  ),
                                ),
                              ],
                            ),

                            SizedBox(width: 55),
                          ],
                        ),
                      ),
                    ),

                    SizedBox(height: 40),

                    // VOLTAR LOGIN
                    GestureDetector(
                      onTap: () {
                        Navigator.pushNamed(context, "/login");
                      },
                      child: Image.asset("assets/images/seta.png"),
                    ),

                    SizedBox(height: 40),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
