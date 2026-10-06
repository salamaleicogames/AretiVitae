import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'notas.dart';

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

  Future<void> carregarConfiguracoes() async {
    //Uso de SharedPreferences p/ salvar os dados das Configurações entre as telas do app
    SharedPreferences prefs = await SharedPreferences.getInstance();

    setState(() {
      _aceitarNotificacoes = prefs.getBool("aceitarNotificacoes") ?? false;
      _loginAutomatico = prefs.getBool("loginAutomatico") ?? false;
      _criNotas = prefs.getBool("criNotas") ?? false;
      _edicaoNotas = prefs.getBool("edicaoNotas") ?? false;
      _excNotas = prefs.getBool("excNotas") ?? false;
      _carregando = false;
    });
  }

  Future<void> salvar() async {
    //Uso de SharedPreferences p/ salvar os dados de Cadastro entre as telas do app
    SharedPreferences prefs = await SharedPreferences.getInstance();

    await prefs.setBool("aceitarNotificacoes", _aceitarNotificacoes);
    await prefs.setBool("loginAutomatico", _loginAutomatico);
    await prefs.setBool("criNotas", _criNotas);
    await prefs.setBool("edicaoNotas", _edicaoNotas);
    await prefs.setBool("excNotas", _excNotas);

    if (!mounted) return;

    //Mensagem de sucesso
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          "Configurações salvas!",
          style: TextStyle(
            fontFamily: "Montserrat",
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: Color.fromARGB(255, 78, 190, 82),
      ),
    );

    //Exibição das Configurações no console
    print("Configurações Salvas com sucesso!");

    if (_aceitarNotificacoes == true)
      print("Notificações: Habilitado\n");
    else
      print("Notificações: Desabilitado\n");

    if (_aceitarNotificacoes == true)
      print("Notificações: Habilitado\n");
    else
      print("Notificações: Desabilitado\n");

    if (_loginAutomatico == true)
      print("Login Automático: Habilitado\n");
    else
      print("Login Automático: Desabilitado\n");

    if (_criNotas == true)
      print("Criação de Notas: Habilitado\n");
    else
      print("Criação de Notas: Desabilitado\n");

    if (_edicaoNotas == true)
      print("Edição de Notas: Habilitado\n");
    else
      print("Edição de Notas: Desabilitado\n");

    if (_excNotas == true)
      print("Exclusão de Notas: Habilitado\n");
    else
      print("Exclusão de Notas: Desabilitado\n");
  }

  @override
  void initState() {
    super.initState();
    carregarConfiguracoes();
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

                // BOX DE PERFIL
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
                            width: 60,
                          ),
                        ),

                        SizedBox(width: 16),

                        Text(
                          "AretiVitae",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            fontWeight: FontWeight.bold,
                            fontSize: 27,
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
                  onPressed: () {
                    salvar();

                    setState(() {});
                  },
                  child: Text(
                    "Salvar",
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontWeight: FontWeight.bold,
                      fontSize: 20,
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

                SizedBox(height: 8),

                // Botão Cancelar
                GestureDetector(
                  onTap: () {
                    Navigator.pushNamed(context, "/home");
                  },
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(context, "/home");
                    },
                    child: Text(
                      "Cancelar",
                      style: TextStyle(
                        fontFamily: "Montserrat",
                        fontWeight: FontWeight.bold,
                        fontSize: 20,
                        color: Colors.white,
                      ),
                    ),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Color.fromRGBO(216, 237, 255, 0.8),
                      minimumSize: Size(280, 48),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                  ),
                ),

                SizedBox(height: 20),
              ],
            ),

            //Botão Voltar (topo da tela)
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
