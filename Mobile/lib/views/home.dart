import 'package:areti_vitae_mobile/views/ajuda.dart';
import 'package:areti_vitae_mobile/views/configuracoes.dart';
import 'package:areti_vitae_mobile/views/login.dart';
import 'package:areti_vitae_mobile/views/perfil.dart';
import 'package:areti_vitae_mobile/views/notas_edicao.dart';
import 'package:areti_vitae_mobile/repository/user_repository.dart';
import 'package:areti_vitae_mobile/repository/notas_repository.dart';
import 'package:areti_vitae_mobile/model/user_model.dart';
import 'package:areti_vitae_mobile/model/notas_model.dart';
import 'package:flutter/material.dart';

//Tela principal do App
class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String nomeUsuario = "Usuário";
  NotasModel? ultimaNota;

  @override
  void initState() {
    super.initState();
    carregarUsuario();
    carregarUltimaNota();
  }

  //Carrega o nome do usuário para exibir no card principal
  Future<void> carregarUsuario() async {
    UserModel? usuario = await UserRepository().carregarUsuario();

    setState(() {
      nomeUsuario = usuario?.usuario ?? "Usuário";
    });
  }

  //Carrega a última nota criada para exibi-la na tela
  Future<void> carregarUltimaNota() async {
    UserModel? usuario = await UserRepository().carregarUsuario();
    List<NotasModel> notas = await NotasRepository().listarNotasPorUsuario(
      usuario!.id,
    );

    if (notas.isEmpty) {
      setState(() {
        ultimaNota = null;
      });
      return;
    }

    notas.sort((a, b) => (a.id as int).compareTo(b.id as int));

    setState(() {
      ultimaNota = notas.last;
    });
  }

  //Abre a tela de edição da última nota criada
  void abrirEdicaoNota(NotasModel nota) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => NotaEdicao(
          nota: nota,
          onSalvar: (titulo, texto) async {
            nota.titulo = titulo;
            nota.texto = texto;
            await NotasRepository().atualizarNota(nota);
            carregarUltimaNota();
          },
        ),
      ),
    );
  }

  void editarUltimaNota() {
    if (ultimaNota == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            "Nenhuma nota encontrada",
            style: TextStyle(color: Colors.black),
          ),
          backgroundColor: Colors.yellow,
          duration: Duration(seconds: 2),
        ),
      );
      return;
    }

    abrirEdicaoNota(ultimaNota!);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(77, 84, 131, 1),

      body: Stack(
        children: [
          SingleChildScrollView(
            child: Center(
              child: Column(
                children: [
                  Padding(
                    padding: EdgeInsets.all(45),
                    child: Column(
                      children: [
                        SizedBox(height: 50),
                        Container(
                          padding: EdgeInsets.all(20),
                          decoration: BoxDecoration(
                            color: Color.fromRGBO(101, 123, 191, 0.9),
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Row(
                            children: [
                              SizedBox(width: 10),

                              GestureDetector(
                                onTap: () {
                                  Navigator.pushNamed(context, "/perfil");
                                },
                                child: Image.asset(
                                  "assets/images/alter.png",
                                  width: 75,
                                ),
                              ),

                              SizedBox(width: 55),

                              //Card inicial - Nome do Usuário
                              Expanded(
                                child: Text(
                                  "Olá, " + nomeUsuario,
                                  style: TextStyle(
                                    fontFamily: "Montserrat",
                                    fontWeight: FontWeight.bold,
                                    fontSize: 32,
                                    color: Color.fromRGBO(255, 255, 255, 0.9),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),

                        SizedBox(height: 40),

                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            //Opções do usuário (Configirações, Sobre, Notas)
                            GestureDetector(
                              onTap: () {
                                Navigator.pushNamed(context, "/configuracoes");
                              },
                              child: SizedBox(
                                width: 120,
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: Color.fromRGBO(208, 227, 255, 0.75),
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      //Configurações
                                      Padding(
                                        padding: EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/saveIcon.png",
                                          width: 75,
                                          height: 75,
                                        ),
                                      ),
                                      Container(
                                        padding: EdgeInsets.symmetric(
                                          vertical: 2,
                                        ),
                                        decoration: BoxDecoration(
                                          color: Color.fromRGBO(
                                            94,
                                            112,
                                            185,
                                            1,
                                          ),
                                          borderRadius: BorderRadius.only(
                                            bottomLeft: Radius.circular(10),
                                            bottomRight: Radius.circular(10),
                                          ),
                                        ),
                                        alignment: Alignment.center,
                                        child: Text(
                                          "Configurações",
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontFamily: "Montserrat",
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),

                            SizedBox(width: 20),

                            //Notas
                            GestureDetector(
                              onTap: () {
                                Navigator.pushNamed(context, "/notas");
                              },
                              child: SizedBox(
                                width: 120,
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: Color.fromRGBO(208, 227, 255, 0.75),
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      Padding(
                                        padding: EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/noteIcon.png",
                                          width: 75,
                                          height: 75,
                                        ),
                                      ),
                                      Container(
                                        padding: EdgeInsets.symmetric(
                                          vertical: 2,
                                        ),
                                        decoration: BoxDecoration(
                                          color: Color.fromRGBO(
                                            94,
                                            112,
                                            185,
                                            1,
                                          ),
                                          borderRadius: BorderRadius.only(
                                            bottomLeft: Radius.circular(10),
                                            bottomRight: Radius.circular(10),
                                          ),
                                        ),
                                        alignment: Alignment.center,
                                        child: Text(
                                          "Notas",
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontFamily: "Montserrat",
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),

                            SizedBox(width: 20),

                            //Sobre
                            GestureDetector(
                              onTap: () {
                                Navigator.pushNamed(context, "/ajuda");
                              },
                              child: SizedBox(
                                width: 120,
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: Color.fromRGBO(208, 227, 255, 0.75),
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      Padding(
                                        padding: EdgeInsets.all(20),
                                        child: Image.asset(
                                          "assets/images/galeriaIcon.png",
                                          width: 75,
                                          height: 75,
                                        ),
                                      ),
                                      Container(
                                        padding: EdgeInsets.symmetric(
                                          vertical: 2,
                                        ),
                                        decoration: BoxDecoration(
                                          color: Color.fromRGBO(
                                            94,
                                            112,
                                            185,
                                            1,
                                          ),
                                          borderRadius: BorderRadius.only(
                                            bottomLeft: Radius.circular(10),
                                            bottomRight: Radius.circular(10),
                                          ),
                                        ),
                                        alignment: Alignment.center,
                                        child: Text(
                                          "Sobre",
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontFamily: "Montserrat",
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),

                        //Última Nota
                        if (ultimaNota != null) ...[
                          SizedBox(height: 30),
                          GestureDetector(
                            onTap: () => abrirEdicaoNota(ultimaNota!),
                            child: Container(
                              width: double.infinity,
                              padding: EdgeInsets.all(16),
                              decoration: BoxDecoration(
                                color: Color.fromRGBO(101, 123, 191, 0.9),
                                borderRadius: BorderRadius.circular(10),
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  if (ultimaNota!.data != "")
                                    Text(
                                      ultimaNota!.data,
                                      style: TextStyle(
                                        fontFamily: "Montserrat",
                                        fontSize: 13,
                                        color: Color.fromRGBO(
                                          255,
                                          255,
                                          255,
                                          0.7,
                                        ),
                                      ),
                                    ),
                                  SizedBox(height: 6),
                                  Text(
                                    ultimaNota!.titulo,
                                    style: TextStyle(
                                      fontFamily: "Montserrat",
                                      fontWeight: FontWeight.bold,
                                      fontSize: 18,
                                      color: Colors.white,
                                    ),
                                  ),
                                  SizedBox(height: 12),
                                  Container(
                                    width: double.infinity,
                                    padding: EdgeInsets.all(12),
                                    decoration: BoxDecoration(
                                      color: Color.fromRGBO(145, 205, 255, 0.5),
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                    child: Text(
                                      ultimaNota!.texto,
                                      maxLines: 6,
                                      overflow: TextOverflow.ellipsis,
                                      style: TextStyle(
                                        fontFamily: "Josefin Sans",
                                        fontSize: 13,
                                        color: Colors.white,
                                        height: 1.4,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],

                        SizedBox(height: 45),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),

          //Seta "Voltar"
          Positioned(
            top: 5,
            left: 20,
            child: GestureDetector(
              onTap: () => Navigator.pushNamed(context, "/login"),
              child: Text(
                "<",
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontSize: 30,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ],
      ),

      //Rodapé (Criar Nota e Editar Última Nota)
      bottomNavigationBar: Container(
        height: 50,
        padding: EdgeInsets.symmetric(horizontal: 30),
        decoration: BoxDecoration(
          color: Color.fromRGBO(178, 207, 250, 1),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 6,
              offset: Offset(0, -2),
            ),
          ],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            //Criar Nova Nota
            GestureDetector(
              onTap: () {
                Navigator.pushNamed(context, "/notas");
              },
              child: Image.asset(
                "assets/images/plusIcon.png",
                width: 50,
                height: 50,
              ),
            ),

            SizedBox(width: 100),

            //Editar Última nota
            GestureDetector(
              onTap: editarUltimaNota,
              child: Image.asset("assets/images/editIcon.png"),
            ),
          ],
        ),
      ),
    );
  }
}
