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
                "O que é o Areti Vitae?",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontWeight: FontWeight.w600,
                  fontSize: 28,
                  color: Colors.white,
                ),
              ),
            ),

            // // PERGUNTA 1
            // Padding(
            //   padding: EdgeInsets.all(20),
            //   child: Container(
            //     width: double.infinity,
            //     padding: EdgeInsets.all(15),
            //     decoration: BoxDecoration(
            //       color: Color.fromRGBO(182, 214, 255, 1),
            //       borderRadius: BorderRadius.circular(10),
            //     ),
            //     child: Text(
            //       "Existe alguma outra versão desta aplicação?",
            //       textAlign: TextAlign.left,
            //       style: TextStyle(
            //         fontFamily: "Montserrat",
            //         fontWeight: FontWeight.w600,
            //         fontSize: 20,
            //         color: Colors.white,
            //       ),
            //     ),
            //   ),
            // ),
            SizedBox(height: 20),

            // Text(
            //   "AretiVitae Desktop: Exclusivo para adminstradores",
            //   textAlign: TextAlign.center,
            //   style: TextStyle(
            //     fontFamily: "Montserrat",
            //     fontSize: 16,
            //     color: Color.fromRGBO(255, 255, 255, 0.9),
            //   ),
            // ),

            // SizedBox(height: 12.5),
            Container(
              child: Padding(
                padding: EdgeInsetsGeometry.all(20),
                child: Text(
                  "O Areti Vitae: Ilustrador de ideias é uma plataforma digital e inovadora que visa auxiliar individuos na conceitualização e no desenvolvimento de projetos e ideias por meio de um mapeamento visual intuitivo, com foco no desenvolvimento eficiente. Ele se destaca pelo canvas imersivo integrado a um sistema de notas, buscando evoluir ideias promissoras, especialmente aquelas de menor escala, e incentivando o desenvolvimento criativo.",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontSize: 16,
                    color: Color.fromRGBO(255, 255, 255, 0.9),
                  ),
                ),
              ),
            ),

            SizedBox(height: 30),

            // PERGUNTA 02
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20),
              child: Container(
                width: double.infinity,
                padding: EdgeInsets.all(15),
                decoration: BoxDecoration(
                  color: Color.fromRGBO(182, 214, 255, 1),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Text(
                  "Criadores do Projeto",
                  textAlign: TextAlign.left,
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.w600,
                    fontSize: 20,
                    color: Colors.white,
                  ),
                ),
              ),
            ),

            SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}
