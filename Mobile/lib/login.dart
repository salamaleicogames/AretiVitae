import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Baclground com duas cores
          Column(
            children: [
              // PARTE DE CIMA
              Expanded(
                flex: 2,
                child: Container(color: Color.fromRGBO(143, 197, 255, 1)),
              ),

              // PARTE DE BAIXO
              Expanded(
                flex: 3,
                child: Container(color: Color.fromRGBO(88, 112, 184, 1)),
              ),
            ],
          ),

          // IMAGEM NO CENTRO DA TELA
          Center(
            child: Container(
              margin: EdgeInsets.only(bottom: 40), // empurra um pouco pra cima
              child: Image.asset("assets/images/alter2.png", width: 140),
            ),
          ),
        ],
      ),
    );
  }
}
