import 'package:areti_vitae_mobile/model/user_model.dart';
import 'package:flutter/material.dart';

class EsqueciSenha extends StatefulWidget {
  const EsqueciSenha({super.key});

  @override
  State<EsqueciSenha> createState() => _EsqueciSenhaState();
}

class _EsqueciSenhaState extends State<EsqueciSenha> {
  final GlobalKey<FormState> esqueciSenhaKey = GlobalKey<FormState>();

  TextEditingController txtEmail = TextEditingController();
  TextEditingController txtCodSeguranca = TextEditingController();
  TextEditingController txtNovaSenha = TextEditingController();
  TextEditingController txtConNovaSenha = TextEditingController();

  bool mostrarCodigo = false;
  bool mostrarSenha = false;

  int codigo = 101010;

  // List<UserModel> usuario = [
  //   UserModel.email("mauricio@gmail.com"),
  //   UserModel.email("joao@gmail.com"),
  // ];

  void enviarEmail() {
    if (esqueciSenhaKey.currentState!.validate()) {
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
  }

  void validarCodigo() {
    if (esqueciSenhaKey.currentState!.validate()) {
      setState(() {
        mostrarSenha = true;
      });

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Código validado!"),
          backgroundColor: Colors.blue,
        ),
      );
    }
  }

  void redefinirSenha() {
    if (esqueciSenhaKey.currentState!.validate()) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Senha redefinida com sucesso!"),
          backgroundColor: Colors.green,
        ),
      );

      print("Senha redefinida com sucesso!");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(77, 84, 131, 1),
      body: SingleChildScrollView(
        child: Center(
          child: Form(
            key: esqueciSenhaKey,
            child: Column(
              children: [
                // HEADER
                Container(
                  width: double.infinity,
                  color: Color.fromRGBO(101, 123, 191, 1),
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
                  child: TextFormField(
                    controller: txtEmail,
                    decoration: InputDecoration(
                      isDense: true,
                      contentPadding: EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 12,
                      ),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(15),
                        borderSide: BorderSide.none,
                      ),
                      hintText: "Email",
                      hintStyle: TextStyle(fontFamily: "Josefin", fontSize: 15),
                      filled: true,
                      fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                      prefixIcon: Icon(Icons.mail),
                    ),

                    //VALIDAÇÃO DE EMAIL
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
                    child: TextFormField(
                      controller: txtCodSeguranca,
                      keyboardType: TextInputType.number,
                      maxLength: 6,
                      decoration: InputDecoration(
                        isDense: true,
                        contentPadding: EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 12,
                        ),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(15),
                          borderSide: BorderSide.none,
                        ),
                        hintText: "Código de Segurança",
                        hintStyle: TextStyle(
                          fontFamily: "Josefin",
                          fontSize: 15,
                        ),
                        filled: true,
                        fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                        prefixIcon: Icon(Icons.key_sharp),
                      ),

                      //VALIDAÇÃO DO CÓDIGO DE SEGURANÇA
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return "Informe o código";
                        }

                        if (!RegExp(r'^\d{6}$').hasMatch(value)) {
                          return "O código deve ter 6 números";
                        }

                        if (value != codigo.toString()) {
                          return "Código incorreto";
                        }

                        return null;
                      },
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
                    child: TextFormField(
                      controller: txtNovaSenha,
                      obscureText: true,
                      decoration: InputDecoration(
                        isDense: true,
                        contentPadding: EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 12,
                        ),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(15),
                          borderSide: BorderSide.none,
                        ),
                        hintText: "Nova Senha",
                        hintStyle: TextStyle(
                          fontFamily: "Josefin",
                          fontSize: 15,
                        ),
                        filled: true,
                        fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                        prefixIcon: Icon(Icons.check),
                      ),

                      //VALIDAÇÃO DA NOVA SENHA
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return "Digite uma senha";
                        }

                        if (value.length < 4) {
                          return "A senha deve ter pelo menos 4 caracteres";
                        }

                        return null;
                      },
                    ),
                  ),

                  SizedBox(height: 40),

                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 25),
                    child: TextFormField(
                      controller: txtConNovaSenha,
                      obscureText: true,
                      decoration: InputDecoration(
                        isDense: true,
                        contentPadding: EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 12,
                        ),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(15),
                          borderSide: BorderSide.none,
                        ),
                        hintText: "Confirmar Nova Senha",
                        hintStyle: TextStyle(
                          fontFamily: "Josefin",
                          fontSize: 15,
                        ),
                        filled: true,
                        fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                        prefixIcon: Icon(Icons.check),
                      ),

                      //VALIDAÇÃO DE CONFIRMAÇÃO DE SENHA
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return "Confirme a senha";
                        }

                        if (value != txtNovaSenha.text) {
                          return "As senhas não coincidem";
                        }

                        return null;
                      },
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
      ),
    );
  }
}
