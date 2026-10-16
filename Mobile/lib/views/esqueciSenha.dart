import 'package:flutter/material.dart';

class EsqueciSenha extends StatefulWidget {
  const EsqueciSenha({super.key});

  @override
  State<EsqueciSenha> createState() => _EsqueciSenhaState();
}

class _EsqueciSenhaState extends State<EsqueciSenha> {
  final GlobalKey<FormState> esqueciSenhaKey = GlobalKey<FormState>();

  final TextEditingController txtEmail = TextEditingController();
  final TextEditingController txtCodSeguranca = TextEditingController();
  final TextEditingController txtNovaSenha = TextEditingController();
  final TextEditingController txtConNovaSenha = TextEditingController();

  bool mostrarCodigo = false;
  bool mostrarSenha = false;

  int codigo = 101010; //Código de confirmação pré-definido

  //Função de validação de email
  void enviarEmail() {
    if (esqueciSenhaKey.currentState!.validate()) {
      setState(() {
        mostrarCodigo = true;
      });

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            "Código enviado ao email!",
            style: TextStyle(
              fontFamily: "Montserrat",
              fontWeight: FontWeight.bold,
            ),
          ),
          backgroundColor: Color.fromRGBO(154, 205, 255, 1),
        ),
      );
    }
  }

  //Função de validação do código de confirmação
  void validarCodigo() {
    if (esqueciSenhaKey.currentState!.validate()) {
      setState(() {
        mostrarSenha = true;
      });

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            "Código validado!",
            style: TextStyle(
              fontFamily: "Montserrat",
              fontWeight: FontWeight.bold,
            ),
          ),
          backgroundColor: Color.fromRGBO(154, 205, 255, 1),
        ),
      );
    }
  }

  //Função para redefinir a senha
  void redefinirSenha() {
    if (esqueciSenhaKey.currentState!.validate()) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            "Senha redefinida com sucesso!",
            style: TextStyle(
              fontFamily: "Montserrat",
              fontWeight: FontWeight.bold,
            ),
          ),
          backgroundColor: Color.fromRGBO(154, 205, 255, 1),
        ),
      );

      print("Senha redefinida com sucesso!");
    }
  }

  @override
  void dispose() {
    txtEmail.dispose();
    txtCodSeguranca.dispose();
    txtNovaSenha.dispose();
    txtConNovaSenha.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final bool isMobile = constraints.maxWidth < 600;
        final double paddingHorizontal = isMobile ? 16 : 30;
        final double tamanhoTitulo = isMobile ? 23 : 34;
        final double tamanhoTexto = isMobile ? 15 : 18;
        final double espacamentoSecoes = isMobile ? 28 : 40;
        final double larguraBotao = isMobile
            ? constraints.maxWidth - paddingHorizontal * 2
            : 320;

        return Scaffold(
          backgroundColor: Color.fromRGBO(77, 84, 131, 1),
          body: SafeArea(
            child: SingleChildScrollView(
              child: Center(
                child: ConstrainedBox(
                  constraints: BoxConstraints(maxWidth: 850),
                  child: Form(
                    key: esqueciSenhaKey,
                    child: Column(
                      children: [
                        // HEADER
                        Container(
                          width: double.infinity,
                          color: Color.fromRGBO(101, 123, 191, 1),
                          padding: EdgeInsets.symmetric(
                            horizontal: paddingHorizontal,
                            vertical: isMobile ? 14 : 18,
                          ),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                "assets/images/networkIcon.png",
                                width: isMobile ? 42 : 60,
                              ),
                              SizedBox(width: isMobile ? 10 : 15),
                              Flexible(
                                child: Text(
                                  "Esqueci a senha",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontFamily: "Montserrat",
                                    fontWeight: FontWeight.w600,
                                    fontSize: tamanhoTitulo,
                                    color: Colors.white,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(height: espacamentoSecoes),
                        Padding(
                          padding: EdgeInsets.symmetric(
                            horizontal: paddingHorizontal,
                          ),
                          child: Text(
                            "Informe o seu email cadastrado",
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              fontSize: tamanhoTexto,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        SizedBox(height: 14),
                        Padding(
                          padding: EdgeInsets.symmetric(
                            horizontal: paddingHorizontal,
                          ),
                          child: TextFormField(
                            controller: txtEmail,
                            keyboardType: TextInputType.emailAddress,
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
                              hintStyle: TextStyle(
                                fontFamily: "Josefin",
                                fontSize: 15,
                              ),
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                              prefixIcon: Icon(Icons.mail),
                            ),
                          ),
                        ),
                        SizedBox(height: espacamentoSecoes),
                        SizedBox(
                          width: larguraBotao.clamp(0.0, 360.0),
                          child: ElevatedButton(
                            onPressed: enviarEmail,
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                              minimumSize: Size(double.infinity, 48),
                              padding: EdgeInsets.symmetric(
                                horizontal: 12,
                                vertical: 12,
                              ),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12),
                              ),
                            ),
                            child: Text(
                              "Enviar Email de Confirmação",
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                fontFamily: "Montserrat",
                                fontWeight: FontWeight.bold,
                                fontSize: isMobile ? 14 : 16,
                                color: Colors.white,
                              ),
                            ),
                          ),
                        ),

                        // CÓDIGO
                        if (mostrarCodigo) ...[
                          SizedBox(height: isMobile ? 22 : 25),
                          Divider(
                            color: Colors.white,
                            thickness: 2,
                            indent: paddingHorizontal,
                            endIndent: paddingHorizontal,
                          ),
                          SizedBox(height: espacamentoSecoes),
                          Padding(
                            padding: EdgeInsets.symmetric(
                              horizontal: paddingHorizontal,
                            ),
                            child: Column(
                              children: [
                                Text(
                                  "Informe o código de segurança",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontFamily: "Montserrat",
                                    fontSize: tamanhoTexto,
                                    color: Colors.white,
                                  ),
                                ),
                                Text(
                                  "enviado no seu email",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontFamily: "Montserrat",
                                    fontSize: tamanhoTexto,
                                    color: Colors.white,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          SizedBox(height: isMobile ? 24 : 32),
                          Padding(
                            padding: EdgeInsets.symmetric(
                              horizontal: paddingHorizontal,
                            ),
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
                          SizedBox(height: isMobile ? 24 : 32),
                          SizedBox(
                            width: larguraBotao.clamp(0.0, 360.0),
                            child: ElevatedButton(
                              onPressed: validarCodigo,
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Color.fromRGBO(
                                  145,
                                  205,
                                  255,
                                  1,
                                ),
                                minimumSize: Size(double.infinity, 48),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(12),
                                ),
                              ),
                              child: Text(
                                "Enviar",
                                style: TextStyle(
                                  fontFamily: "Montserrat",
                                  fontWeight: FontWeight.bold,
                                  fontSize: isMobile ? 14 : 16,
                                  color: Colors.white,
                                ),
                              ),
                            ),
                          ),
                        ],

                        // NOVA SENHA
                        if (mostrarSenha) ...[
                          SizedBox(height: isMobile ? 22 : 25),
                          Divider(
                            color: Colors.white,
                            thickness: 2,
                            indent: paddingHorizontal,
                            endIndent: paddingHorizontal,
                          ),
                          SizedBox(height: espacamentoSecoes),
                          Text(
                            "Redefinir Senha",
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              fontWeight: FontWeight.bold,
                              fontSize: isMobile ? 18 : 20,
                              color: Colors.white,
                            ),
                          ),
                          SizedBox(height: isMobile ? 22 : 30),
                          Padding(
                            padding: EdgeInsets.symmetric(
                              horizontal: paddingHorizontal,
                            ),
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
                          SizedBox(height: isMobile ? 24 : 32),
                          Padding(
                            padding: EdgeInsets.symmetric(
                              horizontal: paddingHorizontal,
                            ),
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
                          SizedBox(height: isMobile ? 24 : 32),
                          SizedBox(
                            width: larguraBotao.clamp(0.0, 360.0),
                            child: ElevatedButton(
                              onPressed: redefinirSenha,
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Color.fromRGBO(
                                  145,
                                  205,
                                  255,
                                  1,
                                ),
                                minimumSize: Size(double.infinity, 48),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(12),
                                ),
                              ),
                              child: Text(
                                "Redefinir Senha",
                                style: TextStyle(
                                  fontFamily: "Montserrat",
                                  fontWeight: FontWeight.bold,
                                  fontSize: isMobile ? 14 : 16,
                                  color: Colors.white,
                                ),
                              ),
                            ),
                          ),
                        ],
                        SizedBox(height: espacamentoSecoes),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
