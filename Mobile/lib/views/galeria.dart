import 'package:areti_vitae_mobile/views/home.dart';
import 'package:areti_vitae_mobile/views/network.dart';
import 'package:flutter/material.dart';

class Galeria extends StatefulWidget {
  const Galeria({super.key});

  @override
  State<Galeria> createState() => _GaleriaState();
}

class _GaleriaState extends State<Galeria> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(94, 112, 185, 1),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Título
            Container(
              width: double.infinity,
              height: 55,
              color: Color.fromRGBO(182, 214, 255, 1),
              padding: EdgeInsets.all(5),
              child: Text(
                "Galeria",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontWeight: FontWeight.w600,
                  fontSize: 32,
                  color: Colors.white,
                ),
              ),
            ),

            //BOX NETWORK 1

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
                    offset: Offset(2, 4), // X Y
                  ),
                ],
              ),
              child: Image.asset("assets/images/tree1.png"),
            ),

            SizedBox(height: 15),

            //BLOCO 1
            GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Net()),
                );
              },
              child: Padding(
                padding: EdgeInsets.symmetric(horizontal: 20),
                child: Container(
                  width: 300,
                  padding: EdgeInsets.all(15),
                  decoration: BoxDecoration(
                    color: Color.fromRGBO(182, 214, 255, 1),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Text(
                    "AretiNetwork",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontWeight: FontWeight.w600,
                      fontSize: 25,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ),

            SizedBox(height: 35),

            //BOX NETWORK 2

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
                    offset: Offset(2, 4), // X Y
                  ),
                ],
              ),
              child: Image.asset("assets/images/tree1.png"),
            ),

            SizedBox(height: 15),

            //BLOCO 2
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20),
              child: Container(
                width: 300,
                padding: EdgeInsets.all(15),
                decoration: BoxDecoration(
                  color: Color.fromRGBO(182, 214, 255, 1),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Text(
                  "Intelectus Network",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.w600,
                    fontSize: 25,
                    color: Colors.white,
                  ),
                ),
              ),
            ),

            SizedBox(height: 40),
          ],
        ),
      ),
    );
    ;
  }
}
