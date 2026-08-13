import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class Configuracoes extends StatefulWidget {
  const Configuracoes({super.key});

  @override
  State<Configuracoes> createState() => _ConfiguracoesState();
}

class _ConfiguracoesState extends State<Configuracoes> {
  final TextEditingController txtArmazenamento = TextEditingController();

  bool _aceitarNotificacoes = false;
  bool _loginAutomatico = false;
  bool _edicaoNotas = false;
  bool _excNotas = false;
  bool _criNotas = false;

  bool _carregando = true;

  @override
  void initState() {
    super.initState();
    buscarConfiguracoes();
  }

  // Busca as configurações do usuário na API
  Future<void> buscarConfiguracoes() async {
    setState(() {
      _carregando = true;
    });

    try {
      // Busca o id do usuário logado, que foi salvo na tela de Login
      SharedPreferences prefs = await SharedPreferences.getInstance();
      int idUsuario = prefs.getInt("idUsuario") ?? 0;

      final url = Uri.parse("http://localhost:8081/configuracoes/$idUsuario");

      final resposta = await http.get(url);

      if (resposta.statusCode == 200) {
        final dados = jsonDecode(resposta.body);

        setState(() {
          _aceitarNotificacoes = dados["notificacoes"] == 1;
          _loginAutomatico = dados["loginAuto"] == 1;
          _edicaoNotas = dados["editNotes"] == 1;
          _excNotas = dados["excNotes"] == 1;
          _criNotas = dados["creNotes"] == 1;
          _carregando = false;
        });
      } else {
        setState(() {
          _carregando = false;
        });
      }
    } catch (erro) {
      setState(() {
        _carregando = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_carregando) {
      return Scaffold(
        backgroundColor: Color.fromRGBO(77, 84, 131, 1),
        body: Center(child: CircularProgressIndicator(color: Colors.white)),
      );
    }

    return Scaffold(
      backgroundColor: Color.fromRGBO(77, 84, 131, 1),
      body: SingleChildScrollView(
        child: Stack(
          children: [
            Column(
              children: [
                SizedBox(height: 50),

                // BOX DE PERFIL (centralizado)
                Center(
                  child: Container(
                    padding: EdgeInsets.fromLTRB(80, 20, 80, 20),
                    decoration: BoxDecoration(
                      color: Color.fromRGBO(101, 123, 191, 0.9),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        GestureDetector(
                          onTap: () {
                            Navigator.pushNamed(context, "/perfil");
                          },
                          child: Image.asset(
                            "assets/images/alter.png",
                            width: 48,
                          ),
                        ),

                        SizedBox(width: 16),

                        Text(
                          "AretiVitae",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            fontWeight: FontWeight.bold,
                            fontSize: 22,
                            color: Color.fromRGBO(255, 255, 255, 0.9),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),

                SizedBox(height: 24),

                // NOTIFICAÇÕES
                Container(
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  padding: EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Color.fromRGBO(101, 123, 191, 0.8),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Notificações",
                        style: TextStyle(
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          color: Colors.white,
                        ),
                      ),
                      Switch(
                        value: _aceitarNotificacoes,
                        onChanged: (value) {
                          setState(() {
                            _aceitarNotificacoes = value;
                          });
                        },
                        activeColor: Color.fromRGBO(169, 213, 248, 1),
                        inactiveThumbColor: Color.fromRGBO(169, 213, 248, 1),
                        activeTrackColor: Colors.white,
                        inactiveTrackColor: Colors.white,
                        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                      ),
                    ],
                  ),
                ),

                SizedBox(height: 12),

                // LOGIN AUTOMÁTICO
                Container(
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  padding: EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Color.fromRGBO(101, 123, 191, 0.8),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Login Automático",
                        style: TextStyle(
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          color: Colors.white,
                        ),
                      ),
                      Switch(
                        value: _loginAutomatico,
                        onChanged: (value) {
                          setState(() {
                            _loginAutomatico = value;
                          });
                        },
                        activeColor: Color.fromRGBO(169, 213, 248, 1),
                        inactiveThumbColor: Color.fromRGBO(169, 213, 248, 1),
                        activeTrackColor: Colors.white,
                        inactiveTrackColor: Colors.white,
                        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                      ),
                    ],
                  ),
                ),

                SizedBox(height: 12),

                // EDIÇÃO DE NOTAS
                Container(
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  padding: EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Color.fromRGBO(101, 123, 191, 0.8),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Edição de notas",
                        style: TextStyle(
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          color: Colors.white,
                        ),
                      ),
                      Switch(
                        value: _edicaoNotas,
                        onChanged: (value) {
                          setState(() {
                            _edicaoNotas = value;
                          });
                        },
                        activeColor: Color.fromRGBO(169, 213, 248, 1),
                        inactiveThumbColor: Color.fromRGBO(169, 213, 248, 1),
                        activeTrackColor: Colors.white,
                        inactiveTrackColor: Colors.white,
                        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                      ),
                    ],
                  ),
                ),

                SizedBox(height: 12),

                // EXCLUSÃO DE NOTAS
                Container(
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  padding: EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Color.fromRGBO(101, 123, 191, 0.8),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Exclusão de notas",
                        style: TextStyle(
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          color: Colors.white,
                        ),
                      ),
                      Switch(
                        value: _excNotas,
                        onChanged: (value) {
                          setState(() {
                            _excNotas = value;
                          });
                        },
                        activeColor: Color.fromRGBO(169, 213, 248, 1),
                        inactiveThumbColor: Color.fromRGBO(169, 213, 248, 1),
                        activeTrackColor: Colors.white,
                        inactiveTrackColor: Colors.white,
                        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                      ),
                    ],
                  ),
                ),

                SizedBox(height: 12),

                // CRIAÇÃO DE NOTAS
                Container(
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  padding: EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Color.fromRGBO(101, 123, 191, 0.8),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Criação de notas",
                        style: TextStyle(
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          color: Colors.white,
                        ),
                      ),
                      Switch(
                        value: _criNotas,
                        onChanged: (value) {
                          setState(() {
                            _criNotas = value;
                          });
                        },
                        activeColor: Color.fromRGBO(169, 213, 248, 1),
                        inactiveThumbColor: Color.fromRGBO(169, 213, 248, 1),
                        activeTrackColor: Colors.white,
                        inactiveTrackColor: Colors.white,
                        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                      ),
                    ],
                  ),
                ),

                SizedBox(height: 24),

                // Botão Salvar
                ElevatedButton(
                  onPressed: () {},
                  child: Text(
                    "Salvar",
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                    minimumSize: Size(260, 44),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                ),

                SizedBox(height: 8),

                // Botão Cancelar
                GestureDetector(
                  onTap: () {
                    Navigator.pushNamed(context, "/home");
                  },
                  child: ElevatedButton(
                    onPressed: () {},
                    child: Text(
                      "Cancelare",
                      style: TextStyle(
                        fontFamily: "Montserrat",
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                        color: Colors.white,
                      ),
                    ),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Color.fromRGBO(216, 237, 255, 0.8),
                      minimumSize: Size(260, 44),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                  ),
                ),

                SizedBox(height: 20),
              ],
            ),

            //Botão Voltar
            Positioned(
              top: 5,
              left: 20,
              child: GestureDetector(
                onTap: () => Navigator.pushNamed(context, "/home"),
                child: Text(
                  "<",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontSize: 28,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
