import 'package:flutter/material.dart';

class Ajuda extends StatefulWidget {
  const Ajuda({super.key});

  @override
  State<Ajuda> createState() => _AjudaState();
}

class _AjudaState extends State<Ajuda> {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final bool isMobile = constraints.maxWidth < 600;
        final double paddingHorizontal = isMobile ? 16 : 28;
        final double tamanhoTitulo = isMobile ? 22 : 25;
        final double tamanhoTexto = isMobile ? 14 : 15;
        final double espacamentoSecoes = isMobile ? 18 : 28;

        return Scaffold(
          backgroundColor: Color.fromRGBO(77, 84, 131, 1),
          body: SingleChildScrollView(
            child: Stack(
              children: [
                Column(
                  children: [
                    SizedBox(height: 45),
                    Center(
                      child: ConstrainedBox(
                        constraints: BoxConstraints(maxWidth: 850),
                        child: Padding(
                          padding: EdgeInsets.symmetric(
                            horizontal: paddingHorizontal,
                          ),
                          child: Column(
                            children: [
                              Container(
                                width: double.infinity,
                                padding: EdgeInsets.all(isMobile ? 16 : 22),
                                decoration: BoxDecoration(
                                  color: Color.fromRGBO(101, 123, 191, 1),
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(
                                      width: double.infinity,
                                      child: Text(
                                        "Ecossitema\nAretiVitae",
                                        textAlign: TextAlign.center,
                                        style: TextStyle(
                                          fontFamily: "Montserrat",
                                          color: Colors.white,
                                          fontWeight: FontWeight.bold,
                                          fontSize: tamanhoTitulo,
                                        ),
                                      ),
                                    ),
                                    SizedBox(height: isMobile ? 16 : 20),
                                    Text(
                                      "Aplicação WEB",
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold,
                                        fontSize: isMobile ? 18 : 20,
                                      ),
                                    ),
                                    SizedBox(height: 12),
                                    Text(
                                      "As notas escritas no app Areti Vitae mobile são compartilhadas com as notas da aplicação web, assim, qualquer nota escrita neste aplicativo, também vai estar presente no site",
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold,
                                        fontSize: tamanhoTexto,
                                        height: 1.4,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              SizedBox(height: espacamentoSecoes),
                              Container(
                                width: double.infinity,
                                padding: EdgeInsets.all(isMobile ? 16 : 22),
                                decoration: BoxDecoration(
                                  color: Color.fromRGBO(101, 123, 191, 1),
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: Column(
                                  children: [
                                    Text(
                                      "Equipe de\ndesenvolvimento",
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold,
                                        fontSize: tamanhoTitulo,
                                      ),
                                    ),
                                    SizedBox(height: isMobile ? 20 : 28),
                                    if (isMobile)
                                      Column(
                                        children: [
                                          _buildDeveloperCard(
                                            image:
                                                "assets/images/joao mantz.jpg",
                                            name: "João Mantz de Oliveira",
                                            role:
                                                "Líder do Projeto\nDesenvolvedor Web",
                                            isMobile: true,
                                          ),
                                          SizedBox(height: 16),
                                          _buildDeveloperCard(
                                            image: "assets/images/mauricio.png",
                                            name: "Maurício F. Ferreira",
                                            role:
                                                "Desenvolvedor Mobile\ne Desktop",
                                            isMobile: true,
                                          ),
                                        ],
                                      )
                                    else
                                      Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceEvenly,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          _buildDeveloperCard(
                                            image:
                                                "assets/images/joao mantz.jpg",
                                            name: "João Mantz de Oliveira",
                                            role:
                                                "Líder do Projeto\nDesenvolvedor Web",
                                            isMobile: false,
                                          ),
                                          _buildDeveloperCard(
                                            image: "assets/images/mauricio.png",
                                            name: "Maurício F. Ferreira",
                                            role:
                                                "Desenvolvedor Mobile\ne Desktop",
                                            isMobile: false,
                                          ),
                                        ],
                                      ),
                                    SizedBox(height: espacamentoSecoes),
                                    Container(
                                      width: double.infinity,
                                      padding: EdgeInsets.symmetric(
                                        vertical: isMobile ? 16 : 20,
                                        horizontal: 12,
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
                                            size: isMobile ? 20 : 22,
                                          ),
                                          SizedBox(height: 8),
                                          Text(
                                            "CONTATO E SUPORTE",
                                            textAlign: TextAlign.center,
                                            style: TextStyle(
                                              fontFamily: "Montserrat",
                                              color: Colors.white70,
                                              fontSize: 12,
                                              fontWeight: FontWeight.w600,
                                              letterSpacing: 1.2,
                                            ),
                                          ),
                                          SizedBox(height: 6),
                                          FittedBox(
                                            fit: BoxFit.scaleDown,
                                            child: Text(
                                              "aretivitae@gmail.com",
                                              style: TextStyle(
                                                fontFamily: "Montserrat",
                                                color: Colors.white,
                                                fontWeight: FontWeight.bold,
                                                fontSize: isMobile ? 15 : 17,
                                              ),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              SizedBox(height: isMobile ? 18 : 25),
                              Text(
                                "2026 - Areti Vitae: Ilustrador de Ideias",
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: Colors.white70,
                                  fontSize: isMobile ? 12 : 15,
                                  fontFamily: "Montserrat",
                                ),
                              ),
                              SizedBox(height: 20),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
                Positioned(
                  top: 5,
                  left: isMobile ? 16 : 28,
                  child: GestureDetector(
                    onTap: () => Navigator.pushNamed(context, "/home"),
                    child: Text(
                      "<",
                      style: TextStyle(
                        fontFamily: "Montserrat",
                        fontSize: isMobile ? 26 : 28,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildDeveloperCard({
    required String image,
    required String name,
    required String role,
    required bool isMobile,
  }) {
    return Container(
      width: isMobile ? double.infinity : 220,
      constraints: BoxConstraints(maxWidth: isMobile ? 340 : 220),
      padding: EdgeInsets.all(isMobile ? 14 : 15),
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
            child: CircleAvatar(
              radius: isMobile ? 48 : 55,
              backgroundImage: AssetImage(image),
            ),
          ),
          SizedBox(height: 12),
          Text(
            name,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white,
              fontSize: isMobile ? 15 : 16,
              fontFamily: "Montserrat",
              fontWeight: FontWeight.w600,
            ),
          ),
          SizedBox(height: 8),
          Text(
            role,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white70,
              fontSize: isMobile ? 13 : 14,
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
