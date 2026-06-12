import 'package:areti_vitae_mobile/views/home.dart';
import 'package:flutter/material.dart';

class Ajuda extends StatefulWidget {
  const Ajuda({super.key});

  @override
  State<Ajuda> createState() => _AjudaState();
}

class _AjudaState extends State<Ajuda> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(94, 112, 185, 1),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Título
            Container(
              width: double.infinity,
              color: Color.fromRGBO(182, 214, 255, 1),
              padding: EdgeInsets.all(15),
              child: Text(
                "Perguntas Frequentes",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontWeight: FontWeight.w600,
                  fontSize: 28,
                  color: Colors.white,
                ),
              ),
            ),

            SizedBox(height: 40),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Container(
                decoration: BoxDecoration(
                  color: Color.fromRGBO(182, 214, 255, 1),
                  borderRadius: BorderRadius.circular(15),
                  boxShadow: [
                    BoxShadow(
                      color: Color.fromRGBO(0, 0, 0, 0.2),
                      blurRadius: 8,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: Theme(
                  data: Theme.of(
                    context,
                  ).copyWith(dividerColor: Colors.transparent),
                  child: ExpansionTile(
                    leading: const Icon(
                      Icons.help_outline_rounded,
                      color: Colors.white,
                    ),

                    iconColor: Colors.white,
                    collapsedIconColor: Colors.white,

                    title: const Text(
                      "O que é o Areti Vitae?",
                      style: TextStyle(
                        fontFamily: "Montserrat",
                        fontWeight: FontWeight.w600,
                        fontSize: 20,
                        color: Colors.white,
                      ),
                    ),

                    children: [
                      Padding(
                        padding: const EdgeInsets.fromLTRB(0, 0, 0, 0),
                        child: Container(
                          width: double.infinity,
                          padding: const EdgeInsets.all(15),
                          decoration: BoxDecoration(
                            color: const Color.fromRGBO(182, 214, 255, 1),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Text(
                            "O Areti Vitae: Ilustrador de ideias é uma plataforma digital e inovadora que visa auxiliar criadores na conceitualização e no desenvolvimento de projetos e ideias por meio de um mapeamento visual intuitivo, com foco no desenvolvimento coletivo. Ele se destaca pelo canvas interativo e estética inovadora, buscando evoluir ideias promissoras, especialmente aquelas de menor escala, e incentivando o pensamento criativo juntamente da organização adequada",
                            textAlign: TextAlign.justify,
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              fontSize: 15,
                              color: Colors.white,
                              height: 1.5,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),

            Row(children: [
              
            ],),
          ],
        ),
      ),
    );
  }
}
