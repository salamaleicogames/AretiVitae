import 'package:areti_vitae_mobile/views/network/network.dart';
import 'package:flutter/material.dart';
import 'dart:developer';

class MembrosNet extends StatefulWidget {
  const MembrosNet({super.key});

  @override
  State<MembrosNet> createState() => _MembrosNetState();
}

class _MembrosNetState extends State<MembrosNet> {
  List<String> nomes = [
    "João Mantz de Oliveira",
    "Maurício Fernandes Ferreira",
    "Amanda Pereira",
    "Joel Silva",
  ];

  List<bool> categorias = [false, false, false, false];

  void salvarAlteracoes() {
    for (int i = 0; i < nomes.length; i++) {
      log("${nomes[i]} - ${categorias[i] ? "Builder" : "Member"}");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(94, 112, 185, 1),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Nav Bar
            Container(
              width: double.infinity,
              height: 40,
              color: Color.fromRGBO(182, 214, 255, 1),
              padding: EdgeInsets.all(5),
            ),

            SizedBox(height: 30),

            // Título
            Container(
              margin: EdgeInsets.all(10),
              child: Text(
                "Membros de Areti Network",
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontWeight: FontWeight.bold,
                  color: Color.fromRGBO(255, 255, 255, 0.9),
                  fontSize: 32,
                ),
              ),
            ),

            SizedBox(height: 30),

            // Lista dinâmica mantendo seu estilo
            Column(
              children: List.generate(nomes.length, (index) {
                return Padding(
                  padding: EdgeInsets.all(20),
                  child: Container(
                    decoration: BoxDecoration(
                      color: Color.fromRGBO(201, 227, 255, 0.8),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Padding(
                      padding: EdgeInsets.all(5),
                      child: Row(
                        children: [
                          // Imagem dentro do molde
                          Stack(
                            children: [
                              Image.asset(
                                "assets/images/moldetvIcon.png",
                                width: 120,
                                height: 120,
                              ),
                              Positioned(
                                top: 25,
                                left: 20,
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(5),
                                  child: Image.asset(
                                    "assets/images/alter2.png",
                                    width: 80,
                                    height: 80,
                                    fit: BoxFit.cover,
                                  ),
                                ),
                              ),
                            ],
                          ),

                          SizedBox(width: 15),

                          // Conteúdo ao lado (mantido)
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  nomes[index],
                                  style: TextStyle(
                                    fontFamily: "Montserrat",
                                    fontSize: 16,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                SizedBox(height: 5),

                                Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text(
                                      "Member",
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        fontSize: 15,
                                        color: Color.fromRGBO(0, 0, 0, 0.9),
                                      ),
                                    ),

                                    Switch(
                                      value: categorias[index],
                                      onChanged: (value) {
                                        setState(() {
                                          categorias[index] = value;
                                        });
                                      },
                                    ),

                                    Text(
                                      "Builder",
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        fontSize: 15,
                                        color: Color.fromRGBO(0, 0, 0, 0.9),
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
                  ),
                );
              }),
            ),

            SizedBox(height: 20),

            // Botão Salvar
            ElevatedButton(
              onPressed: () {
                print("ALTERAÇÕES FEITAS");
                salvarAlteracoes();
                setState(() {});
              },
              child: Text(
                "Salvar Alterações",
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                  color: Colors.white,
                ),
              ),
              style: ElevatedButton.styleFrom(
                backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                minimumSize: Size(400, 48),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            ),

            SizedBox(height: 20),

            // Voltar (mantido)
            GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Net()),
                );
              },
              child: Image.asset("assets/images/seta.png"),
            ),

            SizedBox(height: 30),
          ],
        ),
      ),
    );
  }
}
