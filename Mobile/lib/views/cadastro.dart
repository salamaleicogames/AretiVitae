import 'package:areti_vitae_mobile/model/user_model.dart';
import 'package:areti_vitae_mobile/views/login.dart';
import 'package:flutter/material.dart';

class Cadastro extends StatefulWidget {
  const Cadastro({super.key});

  @override
  State<Cadastro> createState() => _CadastroState();
}

class _CadastroState extends State<Cadastro> {
  final GlobalKey<FormState> cadastroKey = GlobalKey<FormState>();

  final TextEditingController txtNome = TextEditingController();
  final TextEditingController txtEmail = TextEditingController();
  final TextEditingController txtIdade = TextEditingController();
  final TextEditingController txtSenha = TextEditingController();
  final TextEditingController txtConfirmarSenha = TextEditingController();

  List<UserModel> user = [];

  @override
  void dispose() {
    txtNome.dispose();
    txtEmail.dispose();
    txtIdade.dispose();
    txtSenha.dispose();
    txtConfirmarSenha.dispose();
    super.dispose();
  }

  // Apenas exibe os usuários no console
  void exibir() {
    for (UserModel u in user) {
      print("USUÁRIO CADASTRADO!");
      print("${u.usuario} - ${u.email} - ${u.senha} - ${u.idade}");
    }
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final bool isMobile = constraints.maxWidth < 600;
        final double screenHeight = MediaQuery.of(context).size.height;
        final double lightHeight = (screenHeight * 0.18).clamp(100.0, 180.0);
        final double headerHeight = (screenHeight * 0.30).clamp(210.0, 300.0);
        final double paddingHorizontal = isMobile ? 20 : 32;
        final double tamanhoCampo = isMobile ? 14 : 15;
        final double tamanhoBotao = isMobile ? 17 : 20;
        final double larguraBotao = isMobile ? constraints.maxWidth - 48 : 320;

        return Scaffold(
          backgroundColor: Color.fromRGBO(88, 112, 184, 1),
          body: SingleChildScrollView(
            padding: EdgeInsets.only(
              bottom: MediaQuery.of(context).viewInsets.bottom + 20,
            ),
            child: Column(
              children: [
                // CABEÇALHO
                SizedBox(
                  height: headerHeight,
                  child: Stack(
                    clipBehavior: Clip.none,
                    children: [
                      Column(
                        children: [
                          Container(
                            height: lightHeight,
                            width: double.infinity,
                            color: Color.fromRGBO(129, 162, 221, 1),
                          ),
                          Container(
                            height: headerHeight - lightHeight,
                            width: double.infinity,
                            color: Color.fromRGBO(88, 112, 184, 1),
                          ),
                        ],
                      ),
                      Positioned(
                        top: isMobile ? 8 : 12,
                        left: 0,
                        right: 0,
                        child: Center(
                          child: Image.asset(
                            "assets/images/logo1.png",
                            width: isMobile ? 270 : 300,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),

                // FORMULÁRIO
                Container(
                  width: double.infinity,
                  color: Color.fromRGBO(88, 112, 184, 1),
                  child: Center(
                    child: ConstrainedBox(
                      constraints: BoxConstraints(maxWidth: 650),
                      child: Padding(
                        padding: EdgeInsets.symmetric(
                          horizontal: paddingHorizontal,
                        ),
                        child: Column(
                          children: [
                            SizedBox(height: isMobile ? 24 : 40),
                            Form(
                              key: cadastroKey,
                              child: Column(
                                children: [
                                  // INPUT USERNAME
                                  TextFormField(
                                    controller: txtNome,
                                    style: TextStyle(
                                      fontFamily: "Josefin",
                                      fontSize: tamanhoCampo,
                                    ),
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
                                      hintText: "Nome ou Apelido",
                                      hintStyle: TextStyle(
                                        fontFamily: "Josefin",
                                        fontSize: tamanhoCampo,
                                      ),
                                      filled: true,
                                      fillColor: Color.fromRGBO(
                                        255,
                                        255,
                                        255,
                                        0.9,
                                      ),
                                    ),
                                    validator: (value) {
                                      if (value == null || value.isEmpty) {
                                        return "Informe um nome de usuário";
                                      }
                                      return null;
                                    },
                                  ),
                                  SizedBox(height: 15),

                                  // INPUT EMAIL
                                  TextFormField(
                                    controller: txtEmail,
                                    keyboardType: TextInputType.emailAddress,
                                    style: TextStyle(
                                      fontFamily: "Josefin",
                                      fontSize: tamanhoCampo,
                                    ),
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
                                        fontSize: tamanhoCampo,
                                      ),
                                      filled: true,
                                      fillColor: Color.fromRGBO(
                                        255,
                                        255,
                                        255,
                                        0.9,
                                      ),
                                    ),
                                    validator: (value) {
                                      if (value == null || value.isEmpty) {
                                        return "Informe um e-mail";
                                      }
                                      if (!value.contains("@")) {
                                        return "E-mail inválido";
                                      }
                                      return null;
                                    },
                                  ),
                                  SizedBox(height: 15),

                                  // INPUT DATA
                                  TextFormField(
                                    controller: txtIdade,
                                    keyboardType: TextInputType.number,
                                    style: TextStyle(
                                      fontFamily: "Josefin",
                                      fontSize: tamanhoCampo,
                                    ),
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
                                      hintText: "Idade",
                                      hintStyle: TextStyle(
                                        fontFamily: "Josefin",
                                        fontSize: tamanhoCampo,
                                      ),
                                      filled: true,
                                      fillColor: Color.fromRGBO(
                                        255,
                                        255,
                                        255,
                                        0.9,
                                      ),
                                    ),
                                    validator: (value) {
                                      if (value == null || value.isEmpty) {
                                        return "Informe a data de nascimento";
                                      }
                                      return null;
                                    },
                                  ),
                                  SizedBox(height: 15),

                                  // INPUT SENHA
                                  TextFormField(
                                    controller: txtSenha,
                                    obscureText: true,
                                    style: TextStyle(
                                      fontFamily: "Josefin",
                                      fontSize: tamanhoCampo,
                                    ),
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
                                      hintText: "Senha",
                                      hintStyle: TextStyle(
                                        fontFamily: "Josefin",
                                        fontSize: tamanhoCampo,
                                      ),
                                      filled: true,
                                      fillColor: Color.fromRGBO(
                                        255,
                                        255,
                                        255,
                                        0.9,
                                      ),
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
                                  SizedBox(height: 15),

                                  // INPUT CONFIRMAR SENHA
                                  TextFormField(
                                    controller: txtConfirmarSenha,
                                    obscureText: true,
                                    style: TextStyle(
                                      fontFamily: "Josefin",
                                      fontSize: tamanhoCampo,
                                    ),
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
                                      hintText: "Confirmar Senha",
                                      hintStyle: TextStyle(
                                        fontFamily: "Josefin",
                                        fontSize: tamanhoCampo,
                                      ),
                                      filled: true,
                                      fillColor: Color.fromRGBO(
                                        255,
                                        255,
                                        255,
                                        0.9,
                                      ),
                                    ),
                                    validator: (value) {
                                      if (value == null || value.isEmpty) {
                                        return "Confirme a senha";
                                      }
                                      if (value != txtSenha.text) {
                                        return "As senhas não coincidem";
                                      }
                                      return null;
                                    },
                                  ),
                                  SizedBox(height: 10),

                                  // JÁ TEM CONTA
                                  Align(
                                    alignment: Alignment.centerLeft,
                                    child: TextButton(
                                      onPressed: () {
                                        Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                            builder: (context) => Login(),
                                          ),
                                        );
                                      },
                                      child: Text(
                                        "Já tem uma Conta? Faça Login",
                                        textAlign: TextAlign.center,
                                        style: TextStyle(
                                          fontFamily: "Josefin",
                                          fontSize: isMobile ? 14 : 15,
                                          color: Colors.white,
                                        ),
                                      ),
                                    ),
                                  ),
                                  SizedBox(height: isMobile ? 28 : 45),

                                  // BOTÃO CADASTRAR
                                  SizedBox(
                                    width: larguraBotao.clamp(0.0, 360.0),
                                    child: ElevatedButton(
                                      onPressed: () {
                                        if (cadastroKey.currentState!
                                            .validate()) {
                                          UserModel novoUsuario =
                                              UserModel.user(
                                                txtNome.text,
                                                txtEmail.text,
                                                int.parse(txtIdade.text),
                                                txtSenha.text,
                                              );

                                          user.add(novoUsuario);
                                          exibir();
                                          setState(() {});
                                        }
                                      },
                                      style: ElevatedButton.styleFrom(
                                        backgroundColor: Color.fromRGBO(
                                          145,
                                          205,
                                          255,
                                          1,
                                        ),
                                        minimumSize: Size(
                                          double.infinity,
                                          isMobile ? 46 : 48,
                                        ),
                                        shape: RoundedRectangleBorder(
                                          borderRadius: BorderRadius.circular(
                                            12,
                                          ),
                                        ),
                                      ),
                                      child: Text(
                                        "Cadastrar",
                                        style: TextStyle(
                                          fontFamily: "Montserrat",
                                          fontWeight: FontWeight.bold,
                                          fontSize: tamanhoBotao,
                                          color: Colors.white,
                                        ),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            SizedBox(height: isMobile ? 30 : 50),
                          ],
                        ),
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
}
