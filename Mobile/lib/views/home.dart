import 'package:areti_vitae_mobile/views/ajuda.dart';
import 'package:areti_vitae_mobile/views/configuracoes.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
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
                        color: Color.fromRGBO(148, 191, 255, 1),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Row(
                        children: [
                          SizedBox(width: 10),
                          Image.asset("assets/images/alter2.png", width: 75),
                          SizedBox(width: 55),
                          Text(
                            "Maurício",
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

                    SizedBox(height: 70),

                    // BOX DE GALERIA
                    Container(
                      padding: EdgeInsets.all(30),
                      decoration: BoxDecoration(
                        color: Color.fromRGBO(148, 191, 255, 1),
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              //Campo Salvar
                              GestureDetector(
                                onTap: () {
                                  // Navigator.push(
                                  //   context,
                                  //   MaterialPageRoute(
                                  //     builder: (context) => (),
                                  //   ),
                                  // );
                                },
                                child: Container(
                                  color: Color.fromRGBO(208, 227, 255, 1),
                                  child: Padding(
                                    padding: EdgeInsetsGeometry.all(20),
                                    child: Image.asset(
                                      "assets/images/saveIcon.png",
                                      width: 75,
                                    ),
                                  ),
                                ),
                              ),

                              SizedBox(width: 100),

                              //Campo Configurações
                              GestureDetector(
                                onTap: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                      builder: (context) => Configuracoes(),
                                    ),
                                  );
                                },
                                child: Container(
                                  color: Color.fromRGBO(208, 227, 255, 1),
                                  child: Padding(
                                    padding: EdgeInsetsGeometry.all(20),
                                    child: Image.asset(
                                      "assets/images/configIcon.png",
                                      width: 75,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),

                          SizedBox(height: 40),

                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              //Campo Help
                              GestureDetector(
                                onTap: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                      builder: (context) => Ajuda(),
                                    ),
                                  );
                                },
                                child: Container(
                                  color: Color.fromRGBO(208, 227, 255, 1),
                                  child: Padding(
                                    padding: EdgeInsetsGeometry.all(20),
                                    child: Image.asset(
                                      "assets/images/help.png",
                                      width: 75,
                                      height: 70,
                                    ),
                                  ),
                                ),
                              ),

                              SizedBox(width: 100),

                              //Campo Galeria
                              GestureDetector(
                                onTap: () {
                                  // Navigator.push(
                                  //   context,
                                  //   MaterialPageRoute(
                                  //     builder: (context) => Galeria(),
                                  //   ),
                                  // );
                                },
                                child: Container(
                                  color: Color.fromRGBO(208, 227, 255, 1),
                                  child: Padding(
                                    padding: EdgeInsetsGeometry.all(20),
                                    child: Image.asset(
                                      "assets/images/galeriaIcon.png",
                                      width: 75,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),

                    SizedBox(height: 60),

                    // BOX NETWORK
                    Container(
                      padding: EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: Color.fromRGBO(148, 191, 255, 1),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          SizedBox(width: 10),
                          Image.asset(
                            "assets/images/networkTitle.png",
                            width: 250,
                          ),
                          SizedBox(width: 55),
                        ],
                      ),
                    ),

                    SizedBox(height: 40),

                    // BOX DE GALERIA
                    Container(
                      padding: EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Color.fromRGBO(148, 191, 255, 1),
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              //Campo Network
                              GestureDetector(
                                onTap: () {
                                  // Navigator.push(
                                  //   context,
                                  //   MaterialPageRoute(
                                  //     builder: (context) => Network(),
                                  //   ),
                                  // );
                                },
                                child: Container(
                                  color: Color.fromRGBO(208, 227, 255, 1),
                                  child: Padding(
                                    padding: EdgeInsetsGeometry.all(20),
                                    child: Image.asset(
                                      "assets/images/networkIcon.png",
                                      width: 80,
                                    ),
                                  ),
                                ),
                              ),

                              SizedBox(width: 100),

                              //Campo Configurações
                              GestureDetector(
                                onTap: () {
                                  // Navigator.push(
                                  //   context,
                                  //   MaterialPageRoute(
                                  //     builder: (context) => ConfigNetwork(),
                                  //   ),
                                  // );
                                },
                                child: Container(
                                  color: Color.fromRGBO(208, 227, 255, 1),
                                  child: Padding(
                                    padding: EdgeInsetsGeometry.all(20),
                                    child: Image.asset(
                                      "assets/images/configIcon.png",
                                      width: 75,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
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
