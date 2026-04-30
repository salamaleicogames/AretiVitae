import 'package:flutter/material.dart';

class Configuracoes extends StatefulWidget {
  const Configuracoes({super.key});

  @override
  State<Configuracoes> createState() => _ConfiguracoesState();
}

class _ConfiguracoesState extends State<Configuracoes> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(94, 112, 185, 1),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            children: [
              // Box Título
              Container(
                width: double.infinity,
                color: Color.fromRGBO(182, 214, 255, 1),
                child: Padding(
                  padding: EdgeInsets.all(15),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      // Image.asset("assets/images/logo1.png", width: 60),
                      Text(
                        "Configurações",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontFamily: "Montserrat",
                          fontWeight: FontWeight.w600, // Corrected weight
                          fontSize: 34,
                          color: Color.fromRGBO(255, 255, 255, 1),
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              SizedBox(height: 40),

              Padding(
                padding: EdgeInsetsGeometry.all(10),
                child: Text(
                  "Opções Técnicas:",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight(600),
                    fontSize: 25,
                    color: Color.fromRGBO(255, 255, 255, 0.9),
                  ),
                ),
              ),

              Row(
                children: [
                  Column(
                    children: [
                      Text(
                        "Armazenamento",
                        style: TextStyle(
                          fontFamily: "Montserrat",
                          fontSize: 16,
                          color: Color.fromRGBO(255, 255, 255, 0.9),
                        ),
                      ),
                      Text(
                        "usado",
                        style: TextStyle(
                          fontFamily: "Montserrat",
                          fontSize: 16,
                          color: Color.fromRGBO(255, 255, 255, 0.9),
                        ),
                      ),
                    ],
                  ),

                  Column(children: []),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
