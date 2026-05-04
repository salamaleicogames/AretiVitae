import 'package:flutter/material.dart';

class Perfil extends StatefulWidget {
  const Perfil({super.key});

  @override
  State<Perfil> createState() => _PerfilState();
}

class _PerfilState extends State<Perfil> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(88, 112, 184, 1),
      body: SingleChildScrollView(
        child: Column(
          children: [
            //PARTE SUPERIOR
            Container(height: 150, color: Color.fromRGBO(143, 197, 255, 1)),

            // IMAGEM SOBREPOSTA
            Positioned(
              top: MediaQuery.of(context).size.height * 0.1,
              left: 0,
              right: 0,
              child: Center(
                child: Image.asset("assets/images/alter2.png", width: 200),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
