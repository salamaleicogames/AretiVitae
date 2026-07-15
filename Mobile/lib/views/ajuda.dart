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
      backgroundColor: Color.fromRGBO(77, 84, 131, 1),
      body: SingleChildScrollView(
        child: Stack(
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SizedBox(height: 40),
                Padding(
                  padding: EdgeInsetsGeometry.all(20),

                  //Sobre o Areti Vitae
                  child: Container(
                    decoration: BoxDecoration(
                      color: Color.fromRGBO(101, 123, 191, 1),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Padding(
                      padding: EdgeInsetsGeometry.all(15),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(
                            width: double.infinity,
                            child: Text(
                              "Ecossitema\nAretiVitae ",
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                fontFamily: "Montserrat",
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                                fontSize: 25,
                              ),
                            ),
                          ),

                          SizedBox(height: 20),

                          Text(
                            "Aplicação WEB",
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                              fontSize: 20,
                            ),
                          ),

                          SizedBox(height: 15),

                          Text(
                            "As notas escritas no app Areti Vitae mobile são compartilhadas com as notas da aplicação web, assim, qualquer nota escrita neste aplicativo, também vai estar presente no site",
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                              fontSize: 15,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),

                SizedBox(height: 30),

                Padding(
                  padding: EdgeInsetsGeometry.all(20),
                  child: Container(
                    padding: EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: Color.fromRGBO(101, 123, 191, 1),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Column(
                      children: [
                        Text(
                          "Equipe de\ndesenvolvimento",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 25,
                          ),
                        ),

                        SizedBox(height: 30),

                        // Desenvolvedores
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

                        SizedBox(height: 30),

                        Container(
                          padding: EdgeInsets.symmetric(
                            vertical: 20,
                            horizontal: 15,
                          ),
                          decoration: BoxDecoration(
                            color: Colors.white.withOpacity(0.10),
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(
                              color: Colors.white.withOpacity(0.15),
                            ),
                          ),
                          child: Column(
                            children: [
                              Icon(
                                Icons.email_outlined,
                                color: Colors.white70,
                                size: 22,
                              ),

                              SizedBox(height: 10),

                              Text(
                                "CONTATO E SUPORTE",
                                style: TextStyle(
                                  fontFamily: "Montserrat",
                                  color: Colors.white70,
                                  fontSize: 12,
                                  fontWeight: FontWeight.w600,
                                  letterSpacing: 1.2,
                                ),
                              ),

                              SizedBox(height: 6),

                              Text(
                                "aretivitae@gmail.com",
                                style: TextStyle(
                                  fontFamily: "Montserrat",
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 17,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
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

            //Botão Voltar
            Positioned(
              top: 5,
              left: 20,
              child: GestureDetector(
                onTap: () => Navigator.pushNamed(context, "/home"),
                child: Text(
                  "<",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontSize: 28,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

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
