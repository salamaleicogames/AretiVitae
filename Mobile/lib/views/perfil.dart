import 'package:flutter/material.dart';

class Perfil extends StatefulWidget {
  const Perfil({super.key});

  @override
  State<Perfil> createState() => _PerfilState();
}

class _PerfilState extends State<Perfil> {
  TextEditingController txtUser = TextEditingController();
  TextEditingController txtEmail = TextEditingController();
  TextEditingController txtSenha = TextEditingController();

  @override
  void dispose() {
    txtUser.dispose();
    txtEmail.dispose();
    txtSenha.dispose();
    super.dispose();
  }

  void salvarPerfil() {
    String nome = txtUser.text;
    String email = txtEmail.text;
    String senha = txtSenha.text;

    // Validação
    if (nome.isEmpty || email.isEmpty || senha.isEmpty) {
      // Visual
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            "Preencha todos os campos!",
            style: TextStyle(color: Colors.black),
          ),
          backgroundColor: Colors.yellow,
          duration: Duration(seconds: 2),
        ),
      );
      return;
    }

    print("Dados atualizados:");
    print("Nome: $nome");
    print("Email: $email");
    print("Senha: $senha");

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text("Dados atualizados com sucesso!"),
        backgroundColor: Colors.green,
        duration: Duration(seconds: 2),
        behavior: SnackBarBehavior.floating,
        margin: EdgeInsets.all(20),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Column(
            children: [
              // PARTE SUPERIOR
              Container(
                height: 150,
                color: const Color.fromRGBO(143, 197, 255, 1),
              ),

              // PARTE INFERIOR
              Expanded(
                child: Container(
                  color: const Color.fromRGBO(88, 112, 184, 1),
                  child: Column(
                    children: [
                      const SizedBox(height: 100),

                      // Input Nome
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtUser,
                            style: TextStyle(
                              fontFamily: "Josefin",
                              fontSize: 15,
                            ),
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              hintText: "Areti Vitae",
                              hintStyle: const TextStyle(
                                fontFamily: "Josefin",
                                fontSize: 15,
                              ),
                              filled: true,
                              fillColor: const Color.fromRGBO(
                                255,
                                255,
                                255,
                                0.9,
                              ),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 10),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 40),
                        child: Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            "Mudar nome ou apelido",
                            style: const TextStyle(
                              fontFamily: "Montserrat",
                              fontSize: 15,
                              color: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 25),

                      // Input Email
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtEmail,
                            style: TextStyle(
                              fontFamily: "Josefin",
                              fontSize: 15,
                            ),
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              hintText: "aretivitae@gmail.com",
                              hintStyle: const TextStyle(
                                fontFamily: "Josefin",
                                fontSize: 15,
                              ),
                              filled: true,
                              fillColor: const Color.fromRGBO(
                                255,
                                255,
                                255,
                                0.9,
                              ),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 10),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 40),
                        child: Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            "Mudar email",
                            style: const TextStyle(
                              fontFamily: "Montserrat",
                              fontSize: 15,
                              color: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 25),

                      // Senha
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 30),
                        child: SizedBox(
                          height: 40,
                          child: TextField(
                            controller: txtSenha,
                            style: TextStyle(
                              fontFamily: "Josefin",
                              fontSize: 15,
                            ),
                            obscureText: true,
                            decoration: InputDecoration(
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              hintText: "***************",
                              hintStyle: const TextStyle(
                                fontFamily: "Josefin",
                                fontSize: 15,
                              ),
                              filled: true,
                              fillColor: const Color.fromRGBO(
                                255,
                                255,
                                255,
                                0.902,
                              ),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 10),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 40),
                        child: Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            "Mudar Senha",
                            style: const TextStyle(
                              fontFamily: "Montserrat",
                              fontSize: 15,
                              color: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ),
                      ),

                      SizedBox(height: 45),

                      // BOTÃO
                      ElevatedButton(
                        onPressed: () {
                          salvarPerfil();
                          setState(() {});
                        },
                        child: Text(
                          "Salvar",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            fontWeight: FontWeight.bold,
                            fontSize: 18,
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
                  ),
                ),
              ),
            ],
          ),

          // IMAGEM SOBREPOSTA
          Positioned(
            top: 80,
            left: 0,
            right: 0,
            child: Center(
              child: Container(
                width: 150,
                height: 150,
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(25),
                  boxShadow: const [
                    BoxShadow(
                      color: Colors.black26,
                      blurRadius: 10,
                      offset: Offset(0, 4),
                    ),
                  ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.asset(
                    "assets/images/alter2.png",
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
