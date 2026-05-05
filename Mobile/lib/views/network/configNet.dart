import 'dart:developer';

import 'package:areti_vitae_mobile/views/home.dart';
import 'package:areti_vitae_mobile/views/network/network.dart';
import 'package:flutter/material.dart';

class ConfigNet extends StatefulWidget {
  const ConfigNet({super.key});

  @override
  State<ConfigNet> createState() => _ConfigNetState();
}

class _ConfigNetState extends State<ConfigNet> {
  bool fechar = false;
  bool notificar = false;
  bool convites = false;

  void salvarAlteracoes() {
    log("Fechar: ${fechar ? "Sim" : "Não"}");
    log("Notificar: ${notificar ? "Sim" : "Não"}");
    log("Convites: ${convites ? "Sim" : "Não"}");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(88, 112, 184, 1),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Nav Bar
            Container(
              width: double.infinity,
              height: 80,
              color: Color.fromRGBO(182, 214, 255, 1),
              padding: EdgeInsets.fromLTRB(0, 25, 0, 0),
              child: Text(
                "  Areti Network",
                style: TextStyle(
                  color: Color.fromRGBO(255, 255, 255, 0.9),
                  fontFamily: "Montserrat",
                  fontWeight: FontWeight.bold,
                  fontSize: 45,
                ),
              ),
            ),

            SizedBox(height: 10),

            Align(
              alignment: Alignment.centerLeft,
              child: Padding(
                padding: EdgeInsets.only(left: 20),
                child: Text(
                  "Config",
                  style: TextStyle(
                    color: Color.fromRGBO(255, 255, 255, 0.9),
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.bold,
                    fontSize: 45,
                  ),
                ),
              ),
            ),

            SizedBox(height: 40),

            // Switch Fechar
            Container(
              width: 350,
              height: 70,
              padding: EdgeInsets.symmetric(horizontal: 20),
              decoration: BoxDecoration(
                color: Color.fromRGBO(148, 191, 255, 1),
                borderRadius: BorderRadius.circular(10),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    "Fechar",
                    style: TextStyle(
                      color: Color.fromRGBO(255, 255, 255, 0.9),
                      fontWeight: FontWeight.bold,
                      fontFamily: "Montserrat",
                      fontSize: 18,
                    ),
                  ),
                  Switch(
                    value: fechar,
                    onChanged: (v) => setState(() => fechar = v),
                    // activeColor: Color.fromRGBO(148, 223, 255, 1),
                  ),
                ],
              ),
            ),

            SizedBox(height: 40),

            // Switch Notificar
            Container(
              width: 350,
              height: 70,
              padding: EdgeInsets.symmetric(horizontal: 20),
              decoration: BoxDecoration(
                color: Color.fromRGBO(148, 191, 255, 1),
                borderRadius: BorderRadius.circular(10),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    "Notificar",
                    style: TextStyle(
                      color: Color.fromRGBO(255, 255, 255, 0.9),
                      fontWeight: FontWeight.bold,
                      fontFamily: "Montserrat",
                      fontSize: 18,
                    ),
                  ),
                  Switch(
                    value: notificar,
                    onChanged: (v) => setState(() => notificar = v),
                    // activeColor: Color.fromRGBO(148, 223, 255, 1),
                  ),
                ],
              ),
            ),

            SizedBox(height: 40),

            // Switch Permitir Convites
            Container(
              width: 350,
              height: 70,
              padding: EdgeInsets.symmetric(horizontal: 20),
              decoration: BoxDecoration(
                color: Color.fromRGBO(148, 191, 255, 1),
                borderRadius: BorderRadius.circular(10),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    "Permitir Convites",
                    style: TextStyle(
                      color: Color.fromRGBO(255, 255, 255, 0.9),
                      fontWeight: FontWeight.bold,
                      fontFamily: "Montserrat",
                      fontSize: 18,
                    ),
                  ),
                  Switch(
                    value: convites,
                    onChanged: (v) => setState(() => convites = v),
                    // activeColor: Color.fromRGBO(148, 223, 255, 1),
                  ),
                ],
              ),
            ),

            SizedBox(height: 65),

            ElevatedButton(
              onPressed: () {
                print("PERMISSÕES ALTERADAS!");
                salvarAlteracoes();
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
                minimumSize: Size(350, 50),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            ),

            SizedBox(height: 40),

            GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Net()),
                );
              },
              child: Image.asset("assets/images/seta.png"),
            ),

            SizedBox(height: 30),
          ],
        ),
      ),
    );
  }
}
