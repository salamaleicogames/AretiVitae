import 'package:flutter/material.dart';

class EsqueciSenha extends StatefulWidget {
  const EsqueciSenha({super.key});

  @override
  State<EsqueciSenha> createState() => _EsqueciSenhaState();
}

class _EsqueciSenhaState extends State<EsqueciSenha> {
  TextEditingController txtEmail = TextEditingController();
  TextEditingController txtCodSeguranca = TextEditingController();
  TextEditingController txtNovaSenha = TextEditingController();
  TextEditingController txtConNovaSenha = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(94, 112, 185, 1),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            children: [
              // Box Título
              Container(
                width: double.infinity,
                color: Color.fromRGBO(182, 214, 255, 1),
                child: Padding(
                  padding: EdgeInsets.all(15),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Image.asset("assets/images/networkIcon.png", width: 60),
                      SizedBox(width: 15),
                      Text(
                        "Esqueci a senha",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontFamily: "Montserrat",
                          fontWeight: FontWeight.w600, // Corrected weight
                          fontSize: 34,
                          color: Color.fromRGBO(255, 255, 255, 1),
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              SizedBox(height: 40),

              Padding(
                padding: EdgeInsets.all(15),
                child: Text(
                  "Informe o seu email cadastrado",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontSize: 18,
                    color: Color.fromRGBO(255, 255, 255, 0.9),
                  ),
                ),
              ),

              // Email TextField
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 25),
                child: TextField(
                  controller: txtEmail,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(15),
                      borderSide: BorderSide.none,
                    ),
                    hintText: "Email",
                    hintStyle: TextStyle(fontFamily: "Josefin", fontSize: 15),
                    filled: true,
                    fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                    prefixIcon: Icon(Icons.person),
                  ),
                ),
              ),

              SizedBox(height: 40),

              ElevatedButton(
                onPressed: () {},
                child: Text(
                  "Enviar Email de Confirmação",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                    color: Colors.white,
                  ),
                ),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                  minimumSize: Size(280, 48),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
              ),

              SizedBox(height: 25),

              Divider(
                color: Colors.white, // Cor da linha
                thickness: 2, // Espessura da linha
                indent: 20, // Espaçamento à esquerda
                endIndent: 20, // Espaçamento à direita
              ),

              SizedBox(height: 40),

              //Confirmação de Código de Segurança para confirmar a senha
              Text(
                "Informe o código de segurança",
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontSize: 18,
                  color: Color.fromRGBO(255, 255, 255, 0.9),
                ),
              ),
              Text(
                "enviado no seu email",
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontSize: 18,
                  color: Color.fromRGBO(255, 255, 255, 0.9),
                ),
              ),

              SizedBox(height: 40),

              //CÓDIGO DE CONFIRMAÇÃO
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 25),
                child: TextField(
                  controller: txtCodSeguranca,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(15),
                      borderSide: BorderSide.none,
                    ),
                    hintText: "Código de Segurança",
                    hintStyle: TextStyle(fontFamily: "Josefin", fontSize: 15),
                    filled: true,
                    fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                    prefixIcon: Icon(Icons.key_sharp),
                  ),
                ),
              ),

              SizedBox(height: 40),

              ElevatedButton(
                onPressed: () {},
                child: Text(
                  "Enviar",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                    color: Colors.white,
                  ),
                ),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                  minimumSize: Size(280, 48),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
              ),

              SizedBox(height: 25),

              Divider(
                color: Colors.white, // Cor da linha
                thickness: 2, // Espessura da linha
                indent: 20, // Espaçamento à esquerda
                endIndent: 20, // Espaçamento à direita
              ),

              SizedBox(height: 40),

              //REDEFINIR SENHA
              Text(
                "Redefinir Senha",
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                  color: Colors.white,
                ),
              ),

              SizedBox(height: 30),

              Padding(
                padding: EdgeInsets.symmetric(horizontal: 25),
                child: TextField(
                  controller: txtNovaSenha,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(15),
                      borderSide: BorderSide.none,
                    ),
                    hintText: "Nova Senha",
                    hintStyle: TextStyle(fontFamily: "Josefin", fontSize: 15),
                    filled: true,
                    fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                    prefixIcon: Icon(Icons.check),
                  ),
                ),
              ),

              SizedBox(height: 40),

              Padding(
                padding: EdgeInsets.symmetric(horizontal: 25),
                child: TextField(
                  controller: txtConNovaSenha,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(15),
                      borderSide: BorderSide.none,
                    ),
                    hintText: "Confirmar Nova Senha",
                    hintStyle: TextStyle(fontFamily: "Josefin", fontSize: 15),
                    filled: true,
                    fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                    prefixIcon: Icon(Icons.check),
                  ),
                ),
              ),

              SizedBox(height: 40),

              ElevatedButton(
                onPressed: () {},
                child: Text(
                  "Redefinir Senha",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                    color: Colors.white,
                  ),
                ),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                  minimumSize: Size(280, 48),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
              ),

              SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}
