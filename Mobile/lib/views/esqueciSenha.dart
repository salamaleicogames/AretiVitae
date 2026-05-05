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

  bool mostrarCodigo = false;
  bool mostrarSenha = false;

  void enviarEmail() {
    if (txtEmail.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Informe o email!"),
          backgroundColor: Colors.yellow,
        ),
      );
      return;
    }

    setState(() {
      mostrarCodigo = true;
    });

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text("Código enviado ao email!"),
        backgroundColor: Colors.blue,
      ),
    );
  }

  void validarCodigo() {
    if (txtCodSeguranca.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Informe o código!"),
          backgroundColor: Colors.yellow,
        ),
      );
      return;
    }

    setState(() {
      mostrarSenha = true;
    });

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text("Código validado!"), backgroundColor: Colors.blue),
    );
  }

  void redefinirSenha() {
    String senha = txtNovaSenha.text;
    String confirmar = txtConNovaSenha.text;

    if (senha.isEmpty || confirmar.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Preencha os campos!"),
          backgroundColor: Colors.yellow,
        ),
      );
      return;
    }

    if (senha != confirmar) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("As senhas não coincidem!"),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text("Senha redefinida com sucesso!"),
        backgroundColor: Colors.green,
      ),
    );

    print("Senha redefinida com sucesso!");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(94, 112, 185, 1),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            children: [
              // HEADER
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
                        style: TextStyle(
                          fontFamily: "Montserrat",
                          fontWeight: FontWeight.w600,
                          fontSize: 34,
                          color: Colors.white,
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              SizedBox(height: 40),

              // EMAIL
              Padding(
                padding: EdgeInsets.all(15),
                child: Text(
                  "Informe o seu email cadastrado",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontSize: 18,
                    color: Colors.white,
                  ),
                ),
              ),

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
                onPressed: enviarEmail,
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

              // ======================
              // CÓDIGO
              // ======================
              if (mostrarCodigo) ...[
                SizedBox(height: 25),

                Divider(
                  color: Colors.white,
                  thickness: 2,
                  indent: 20,
                  endIndent: 20,
                ),

                SizedBox(height: 40),

                Text(
                  "Informe o código de segurança",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontSize: 18,
                    color: Colors.white,
                  ),
                ),
                Text(
                  "enviado no seu email",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontSize: 18,
                    color: Colors.white,
                  ),
                ),

                SizedBox(height: 40),

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
                  onPressed: validarCodigo,
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
              ],

              // ======================
              // NOVA SENHA
              // ======================
              if (mostrarSenha) ...[
                SizedBox(height: 25),

                Divider(
                  color: Colors.white,
                  thickness: 2,
                  indent: 20,
                  endIndent: 20,
                ),

                SizedBox(height: 40),

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
                    obscureText: true,
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
                    obscureText: true,
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
                  onPressed: redefinirSenha,
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
              ],

              SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}
