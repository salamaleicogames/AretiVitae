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
      backgroundColor: Color.fromRGBO(77, 84, 131, 1),

      body: Stack(
        children: [
          SingleChildScrollView(
            child: Center(
              child: Column(
                children: [
                  Padding(
                    padding: EdgeInsets.all(45),
                    child: Column(
                      children: [
                        SizedBox(height: 50),
                        // BOX DE PERFIL
                        Container(
                          padding: EdgeInsets.all(20),
                          decoration: BoxDecoration(
                            color: Color.fromRGBO(101, 123, 191, 0.9),
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
                                  "assets/images/alter.png",
                                  width: 75,
                                ),
                              ),

                              SizedBox(width: 55),
                              Text(
                                "Olá, " + nomeUsuario,
                                style: TextStyle(
                                  fontFamily: "Montserrat",
                                  fontWeight: FontWeight.bold,
                                  fontSize: 32,
                                  color: Color.fromRGBO(255, 255, 255, 0.9),
                                ),
                              ),
                            ],
                          ),
                        ),

                        SizedBox(height: 40),

                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            // CONFIGURAÇÕES
                            GestureDetector(
                              onTap: () {
                                Navigator.pushNamed(context, "/configuracoes");
                              },
                              child: SizedBox(
                                width: 120, // ajuste conforme necessário
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: const Color.fromRGBO(
                                      208,
                                      227,
                                      255,
                                      0.75,
                                    ),
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      Padding(
                                        padding: const EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/saveIcon.png",
                                          width: 75,
                                          height: 75,
                                        ),
                                      ),
                                      Container(
                                        padding: const EdgeInsets.symmetric(
                                          vertical: 2,
                                        ),
                                        decoration: const BoxDecoration(
                                          color: Color.fromRGBO(
                                            94,
                                            112,
                                            185,
                                            1,
                                          ),
                                          borderRadius: BorderRadius.only(
                                            bottomLeft: Radius.circular(10),
                                            bottomRight: Radius.circular(10),
                                          ),
                                        ),
                                        alignment: Alignment.center,
                                        child: const Text(
                                          "Configurações",
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontFamily: "Montserrat",
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),

                            SizedBox(width: 20),

                            //NOTAS
                            GestureDetector(
                              onTap: () {
                                Navigator.pushNamed(context, "/notas");
                              },
                              child: SizedBox(
                                width: 120, // ajuste conforme necessário
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: const Color.fromRGBO(
                                      208,
                                      227,
                                      255,
                                      0.75,
                                    ),
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      Padding(
                                        padding: const EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/noteIcon.png",
                                          width: 75,
                                          height: 75,
                                        ),
                                      ),
                                      Container(
                                        padding: const EdgeInsets.symmetric(
                                          vertical: 2,
                                        ),
                                        decoration: const BoxDecoration(
                                          color: Color.fromRGBO(
                                            94,
                                            112,
                                            185,
                                            1,
                                          ),
                                          borderRadius: BorderRadius.only(
                                            bottomLeft: Radius.circular(10),
                                            bottomRight: Radius.circular(10),
                                          ),
                                        ),
                                        alignment: Alignment.center,
                                        child: const Text(
                                          "Notas",
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontFamily: "Montserrat",
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),

                            SizedBox(width: 20),

                            //SOBRE
                            GestureDetector(
                              onTap: () {
                                Navigator.pushNamed(context, "/ajuda");
                              },
                              child: SizedBox(
                                width: 120,
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: const Color.fromRGBO(
                                      208,
                                      227,
                                      255,
                                      0.75,
                                    ),
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      Padding(
                                        padding: const EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/galeriaIcon.png",
                                          width: 75,
                                          height: 75,
                                        ),
                                      ),
                                      Container(
                                        padding: const EdgeInsets.symmetric(
                                          vertical: 2,
                                        ),
                                        decoration: const BoxDecoration(
                                          color: Color.fromRGBO(
                                            94,
                                            112,
                                            185,
                                            1,
                                          ),
                                          borderRadius: BorderRadius.only(
                                            bottomLeft: Radius.circular(10),
                                            bottomRight: Radius.circular(10),
                                          ),
                                        ),
                                        alignment: Alignment.center,
                                        child: const Text(
                                          "Sobre",
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontFamily: "Montserrat",
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),

                        // // BOX DE GALERIA
                        // Container(
                        //   padding: EdgeInsets.all(30),
                        //   decoration: BoxDecoration(
                        //     color: Color.fromRGBO(148, 191, 255, 0.8),
                        //     borderRadius: BorderRadius.circular(15),
                        //   ),
                        //   child: Column(children: [SizedBox(height: 40)]),
                        // ),
                        SizedBox(height: 45),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),

          // BOTÃO VOLTAR FIXO NO CANTO SUPERIOR ESQUERDO
          Positioned(
            top: 5,
            left: 20,
            child: GestureDetector(
              onTap: () => Navigator.pushNamed(context, "/login"),
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
        ],
      ),

      // RODAPÉ FIXO
      bottomNavigationBar: Container(
        height: 50,
        padding: const EdgeInsets.symmetric(horizontal: 30),
        decoration: BoxDecoration(
          color: Color.fromRGBO(178, 207, 250, 1),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 6,
              offset: Offset(0, -2),
            ),
          ],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // BOTÃO "+"
            GestureDetector(
              onTap: () {
                Navigator.pushNamed(context, "/notas");
              },
              child: Image.asset(
                "assets/images/plusIcon.png",
                width: 50,
                height: 50,
              ),
            ),

            SizedBox(width: 100),

            // BOTÃO EDITAR (LÁPIS)
            GestureDetector(
              onTap: () {
                Navigator.pushNamed(context, "/notas");
              },
              child: Image.asset("assets/images/editIcon.png"),
            ),
          ],
        ),
      ),
    );
  }
}
