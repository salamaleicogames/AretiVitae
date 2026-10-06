import 'package:flutter/material.dart';

class Creditos extends StatefulWidget {
  Creditos({super.key});

  @override
  State<Creditos> createState() => _CreditosState();
}

class _CreditosState extends State<Creditos> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(94, 112, 185, 1),

      body: SingleChildScrollView(
        child: Column(
          children: [
            // // Cabeçalho
            // Container(
            //   width: double.infinity,
            //   padding:   EdgeInsets.symmetric(vertical: 20, horizontal: 15),
            //   decoration:   BoxDecoration(
            //     color: Color.fromRGBO(182, 214, 255, 1),
            //     borderRadius: BorderRadius.only(
            //       bottomLeft: Radius.circular(20),
            //       bottomRight: Radius.circular(20),
            //     ),
            //   ),
            //   child:   Text(
            //     "Areti Vitae - Créditos",
            //     textAlign: TextAlign.center,
            //     style: TextStyle(
            //       fontFamily: "Montserrat",
            //       fontWeight: FontWeight.w600,
            //       fontSize: 28,
            //       color: Colors.white,
            //     ),
            //   ),
            // ),
            SizedBox(height: 15),

            // Ícone
            Icon(Icons.groups_rounded, size: 70, color: Colors.white70),

            SizedBox(height: 10),

            Text(
              "Equipe de Desenvolvimento",
              style: TextStyle(
                color: Colors.white,
                fontSize: 22,
                fontWeight: FontWeight.bold,
                fontFamily: "Montserrat",
              ),
            ),

            SizedBox(height: 20),

            // Texto
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 25),
              child: Text(
                "O Areti Vitae foi desenvolvido com dedicação e compromisso para oferecer a melhor experiência possível aos seus usuários.\n\nEste projeto é resultado da colaboração de estudantes apaixonados por tecnologia, responsáveis pelo planejamento, design e desenvolvimento da plataforma.",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  color: Color.fromRGBO(255, 255, 255, 0.9),
                  height: 1.5,
                ),
              ),
            ),

            SizedBox(height: 30),

            // Desenvolvedores
            //Uso de componentização para encurtar o código (Houve ajude da IA nesse processo)
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildDeveloperCard(
                  image: "assets/images/João Mantz.jpeg",
                  name: "João Mantz de Oliveira",
                  role: "Líder do Projeto\nDesenvolvedor Web",
                ),

                _buildDeveloperCard(
                  image: "assets/images/Maurício.jpeg",
                  name: "Maurício F. Ferreira",
                  role: "Desenvolvedor Mobile\n e Desktop",
                ),
              ],
            ),

            SizedBox(height: 35),

            Padding(
              padding: EdgeInsets.symmetric(horizontal: 40),
              child: Divider(
                color: Colors.white.withOpacity(0.25),
                thickness: 1,
              ),
            ),

            SizedBox(height: 25),

            Text(
              "2026 - Areti Vitae: Ilustrador de Ideias",
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white70,
                fontSize: 15,
                fontFamily: "Montserrat",
              ),
            ),

            SizedBox(height: 20),
          ],
        ),
      ),
    );
  }

  //Componente para o card dos desenvolvedores do projeto (Houve ajuda da IA)
  Widget _buildDeveloperCard({
    required String image,
    required String name,
    required String role,
  }) {
    return Container(
      width: 170,
      padding: EdgeInsets.all(15),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.12),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white.withOpacity(0.15)),
      ),
      child: Column(
        children: [
          Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: Colors.black26,
                  blurRadius: 8,
                  offset: Offset(0, 4),
                ),
              ],
            ),
            child: CircleAvatar(radius: 55, backgroundImage: AssetImage(image)),
          ),

          SizedBox(height: 15),

          Text(
            name,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white,
              fontSize: 16,
              fontFamily: "Montserrat",
              fontWeight: FontWeight.w600,
            ),
          ),

          SizedBox(height: 10),

          Text(
            role,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white70,
              fontSize: 14,
              fontFamily: "Montserrat",
              fontWeight: FontWeight.w500,
              height: 1.4,
            ),
          ),
        ],
      ),
    );
  }
}
