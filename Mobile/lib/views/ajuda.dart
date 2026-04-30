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

            // PERGUNTA 1
            Padding(
              padding: EdgeInsets.all(20),
              child: Container(
                width: double.infinity,
                padding: EdgeInsets.all(15),
                decoration: BoxDecoration(
                  color: Color.fromRGBO(182, 214, 255, 1),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Text(
                  "Existe alguma outra versão desta aplicação?",
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

            Text(
              "AretiVitae Desktop: Exclusivo para adminstradores",
              textAlign: TextAlign.center,
              style: TextStyle(
                fontFamily: "Montserrat",
                fontSize: 16,
                color: Color.fromRGBO(255, 255, 255, 0.9),
              ),
            ),

            SizedBox(height: 12.5),

            Text(
              "AretiVitae Web: Para todo tipo de usuário, inclui ferramentas como: Criação de mapas e networks.",
              textAlign: TextAlign.center,
              style: TextStyle(
                fontFamily: "Montserrat",
                fontSize: 16,
                color: Color.fromRGBO(255, 255, 255, 0.9),
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
                  "Qual a função do aplicativo mobile?",
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

            Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                children: [
                  Text(
                    "A aplicação mobile tem o objetivo de executar funções básicas e gerais relacionadas a conta e network que o usuário é membro ou builder, dependendo da hierarquia daquele que usufrui da aplicação, as possibilidades aumentam ou diminuem.",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontSize: 16,
                      color: Color.fromRGBO(255, 255, 255, 0.9),
                    ),
                  ),

                  SizedBox(height: 12.5),

                  Text(
                    "Entre as funções do aplicativo mobile, aqui estão algumas: Visualizador de alterações, opções da network, visualizador de network e galeria.",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontSize: 16,
                      color: Color.fromRGBO(255, 255, 255, 0.9),
                    ),
                  ),

                  SizedBox(height: 30),

                  GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => Home()),
                      );
                    },
                    child: Image.asset("assets/images/seta.png"),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
