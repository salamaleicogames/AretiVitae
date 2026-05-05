import 'package:areti_vitae_mobile/views/network/configNet.dart';
import 'package:areti_vitae_mobile/views/home.dart';
import 'package:areti_vitae_mobile/views/network/configNet2.dart';
import 'package:areti_vitae_mobile/views/network/membrosNet.dart'; // IMPORT NECESSÁRIO
import 'package:areti_vitae_mobile/views/network/membrosNet2.dart';
import 'package:flutter/material.dart';

class Net2 extends StatefulWidget {
  const Net2({super.key});

  @override
  State<Net2> createState() => _Net2State();
}

class _Net2State extends State<Net2> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(94, 112, 185, 1),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Nav Bar
            Container(
              width: double.infinity,
              height: 40,
              color: Color.fromRGBO(182, 214, 255, 1),
              padding: EdgeInsets.all(5),
            ),

            SizedBox(height: 40),

            //Título
            Center(
              child: Image.asset(
                "assets/images/networkTitle.png",
                width: 300,
                height: 50,
              ),
            ),

            //IMAGEM
            Container(
              margin: EdgeInsets.fromLTRB(0, 15, 0, 15),
              width: 300,
              height: 170,
              decoration: BoxDecoration(
                color: Color.fromRGBO(255, 255, 255, 0.8),
                borderRadius: BorderRadius.circular(10),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black26,
                    blurRadius: 8,
                    offset: Offset(2, 4),
                  ),
                ],
              ),
              child: Image.asset("assets/images/tree1.png"),
            ),

            SizedBox(height: 30),

            Container(
              width: 300,
              child: Center(
                child: Text(
                  "Intelectus Network",
                  style: TextStyle(
                    color: Color.fromRGBO(255, 255, 255, 0.9),
                    fontFamily: "Montserrat",
                    fontSize: 35,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),

            SizedBox(height: 20),

            Container(
              width: 350,
              height: 10,
              decoration: BoxDecoration(
                color: Color.fromRGBO(255, 255, 255, 0.9),
                borderRadius: BorderRadius.circular(15),
              ),
              child: Padding(padding: EdgeInsets.all(10)),
            ),

            SizedBox(height: 30),

            // BOTÃO MEMBROS (corrigido)
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => MembrosNet2()),
                );
              },
              child: Text(
                "Membros",
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                  color: Colors.white,
                ),
              ),
              style: ElevatedButton.styleFrom(
                backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                minimumSize: Size(400, 48),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            ),

            SizedBox(height: 30),

            // BOTÃO CONFIG
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ConfigNet2()),
                );
              },
              child: Text(
                "Configurações",
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                  color: Colors.white,
                ),
              ),
              style: ElevatedButton.styleFrom(
                backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                minimumSize: Size(400, 48),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            ),

            SizedBox(height: 30),

            //Voltar
            GestureDetector(
              onTap: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => Home()),
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
