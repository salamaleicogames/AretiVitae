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
                  color: Color.fromRGBO(182, 214, 255, 0.7),
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
                            color: Color.fromRGBO(182, 214, 255, 0.7),
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

            SizedBox(height: 50),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Container(
                decoration: BoxDecoration(
                  color: Color.fromRGBO(182, 214, 255, 0.7),
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
                      "Outras Versões",
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
                            color: Color.fromRGBO(182, 214, 255, 0.7),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Column(
                            children: [
                              Text(
                                "A versão Web do aplicativo oferece a experiência completa da plataforma, incluindo recursos exclusivos como a criação e gerenciamento de Canvas, proporcionando mais praticidade e controle para suas ideias",
                                textAlign: TextAlign.justify,
                                style: TextStyle(
                                  fontFamily: "Montserrat",
                                  fontSize: 15,
                                  color: Colors.white,
                                  height: 1.5,
                                ),
                              ),

                              SizedBox(height: 10),

                              Text(
                                "aretiVitae.com.br",
                                textAlign: TextAlign.justify,
                                style: TextStyle(
                                  fontFamily: "Montserrat",
                                  fontSize: 15,
                                  color: Colors.white,
                                  height: 1.5,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),

            SizedBox(height: 50),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: const Color.fromRGBO(182, 214, 255, 0.7),
                  borderRadius: BorderRadius.circular(15),
                  boxShadow: [
                    BoxShadow(
                      color: Color.fromRGBO(0, 0, 0, 0.2),
                      blurRadius: 8,
                      offset: Offset(0, 4),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Icon(
                          Icons.support_agent,
                          color: Colors.white,
                          size: 28,
                        ),
                        SizedBox(width: 10),
                        Text(
                          "Orientações e Suporte",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            fontSize: 20,
                            fontWeight: FontWeight.w600,
                            color: Colors.white,
                          ),
                        ),
                      ],
                    ),

                    SizedBox(height: 15),

                    Text(
                      "Precisa de ajuda ou encontrou algum problema? Entre em contato com nossa equipe de suporte.",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontFamily: "Montserrat",
                        fontSize: 14,
                        color: Colors.white,
                        height: 1.5,
                      ),
                    ),

                    SizedBox(height: 20),

                    Container(
                      padding: EdgeInsets.symmetric(
                        horizontal: 15,
                        vertical: 12,
                      ),
                      decoration: BoxDecoration(
                        color: Color.fromRGBO(255, 255, 255, 0.1),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          Icon(Icons.email_outlined, color: Colors.white),
                          SizedBox(width: 10),
                          SelectableText(
                            "aretivitae@gmail.com",
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              fontSize: 15,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),

            SizedBox(height: 30),
          ],
        ),
      ),
    );
  }
}
