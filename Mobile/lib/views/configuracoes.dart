import 'package:areti_vitae_mobile/views/home.dart';
import 'package:flutter/material.dart';

class Configuracoes extends StatefulWidget {
  const Configuracoes({super.key});

  @override
  State<Configuracoes> createState() => _ConfiguracoesState();
}

class _ConfiguracoesState extends State<Configuracoes> {
  TextEditingController txtArmazenamento = TextEditingController();

  @override
  void initState() {
    super.initState();
    txtArmazenamento.text = "51.4mb";
  }

  void limparCache() {
    txtArmazenamento.text = "0.0mb";
    print("CACHÊ LIMPO COM SUCESSO!");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(94, 112, 185, 1),
      body: Column(
        children: [
          // Título
          Container(
            width: double.infinity,
            color: Color.fromRGBO(182, 214, 255, 1),
            padding: EdgeInsets.all(15),
            child: Text(
              "Configurações",
              textAlign: TextAlign.center,
              style: TextStyle(
                fontFamily: "Montserrat",
                fontWeight: FontWeight.w600,
                fontSize: 28,
                color: Colors.white,
              ),
            ),
          ),

          SizedBox(height: 30),

          Center(
            child: Column(
              children: [
                Text(
                  "Opções técnicas",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.w600,
                    fontSize: 18,
                    color: Colors.white,
                  ),
                ),

                SizedBox(height: 20),

                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Column(
                      children: [
                        Text(
                          "Armazenamento",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            fontSize: 17,
                            color: Colors.white,
                          ),
                        ),
                        Text(
                          "usado",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            fontSize: 17,
                            color: Colors.white,
                          ),
                        ),
                      ],
                    ),

                    SizedBox(width: 15),

                    Column(
                      children: [
                        SizedBox(
                          width: 180,
                          height: 35,
                          child: TextField(
                            controller: txtArmazenamento,
                            enabled: false,
                            textAlign: TextAlign.center,
                            decoration: InputDecoration(
                              contentPadding: EdgeInsets.zero,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(10),
                                borderSide: BorderSide.none,
                              ),
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                        ),

                        SizedBox(height: 8),

                        SizedBox(
                          height: 30,
                          child: ElevatedButton(
                            onPressed: () {
                              limparCache();
                              setState(() {});
                            },
                            style: ElevatedButton.styleFrom(
                              padding: EdgeInsets.symmetric(horizontal: 12),
                              backgroundColor: Colors.white,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8),
                              ),
                            ),
                            child: Text(
                              "Limpar Cache",
                              style: TextStyle(
                                fontFamily: "Montserrat",
                                fontSize: 12,
                                color: Color.fromRGBO(138, 138, 138, 1),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),

          Spacer(),

          Padding(
            padding: EdgeInsets.only(bottom: 20),
            child: SizedBox(
              width: 300,
              height: 45,
              child: ElevatedButton(
                onPressed: () {
                  print("CONFIGURAÇÕES SALVAS!");
                  Navigator.pushNamed(context, "/home", arguments: "João");
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
                child: Text(
                  "Salvar Alterações",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                    color: Colors.white,
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
