import 'package:areti_vitae_mobile/model/notas_model.dart';
import 'package:flutter/material.dart';

// Tela de criação e edição de uma nota
class NotaEdicao extends StatefulWidget {
  final NotasModel nota;
  final void Function(String titulo, String texto) onSalvar;

  const NotaEdicao({super.key, required this.nota, required this.onSalvar});

  @override
  State<NotaEdicao> createState() => _NotaEdicaoState();
}

class _NotaEdicaoState extends State<NotaEdicao> {
  late TextEditingController txtTitulo;
  late TextEditingController txtTexto;

  @override
  void initState() {
    super.initState();
    txtTitulo = TextEditingController(text: widget.nota.titulo);
    txtTexto = TextEditingController(text: widget.nota.texto);
  }

  @override
  void dispose() {
    txtTitulo.dispose();
    txtTexto.dispose();
    super.dispose();
  }

  // Salva e volta para a lista
  void _salvar() {
    final titulo = txtTitulo.text.trim();
    final texto = txtTexto.text.trim();

    if (titulo.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text(
            "O título não pode ficar vazio!",
            style: TextStyle(color: Colors.black),
          ),
          backgroundColor: Colors.yellow,
          duration: Duration(seconds: 2),
        ),
      );
      return;
    }

    widget.onSalvar(titulo, texto);

    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text("Nota salva com sucesso!"),
        backgroundColor: Colors.green,
        duration: Duration(seconds: 2),
        behavior: SnackBarBehavior.floating,
        margin: EdgeInsets.all(20),
      ),
    );

    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          // ── Topo azul claro (igual ao Perfil) ──────────────
          Container(
            height: 120,
            color: const Color.fromRGBO(143, 197, 255, 1),
            padding: EdgeInsets.only(
              top: MediaQuery.of(context).padding.top + 10,
              left: 10,
              right: 20,
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // Botão voltar
                IconButton(
                  icon: const Icon(
                    Icons.arrow_back_ios_new,
                    color: Colors.white,
                    size: 20,
                  ),
                  onPressed: () => Navigator.pop(context),
                ),
                const Spacer(),

                // Data da nota (exibida no topo)
                Text(
                  widget.nota.data,
                  style: TextStyle(
                    fontFamily: "Josefin Sans",
                    fontSize: 22,
                    color: Colors.white,
                  ),
                ),
              ],
            ),
          ),

          Expanded(
            child: Container(
              color: Color.fromRGBO(88, 112, 184, 1),
              child: SingleChildScrollView(
                padding: EdgeInsets.symmetric(horizontal: 30, vertical: 30),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Campo: Título
                    SizedBox(
                      height: 48,
                      child: TextField(
                        controller: txtTitulo,
                        style: TextStyle(
                          fontFamily: "Josefin Sans",
                          fontSize: 15,
                        ),
                        decoration: InputDecoration(
                          hintText: "Título da nota",
                          hintStyle: TextStyle(
                            fontFamily: "Josefin Sans",
                            fontSize: 15,
                          ),
                          filled: true,
                          fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(15),
                            borderSide: BorderSide.none,
                          ),
                        ),
                      ),
                    ),

                    SizedBox(height: 8),
                    Text(
                      "Mudar título",
                      style: TextStyle(
                        fontFamily: "Montserrat",
                        fontSize: 13,
                        color: Color.fromRGBO(255, 255, 255, 0.9),
                      ),
                    ),

                    SizedBox(height: 25),

                    // Campo: Texto (várias linhas)
                    TextField(
                      controller: txtTexto,
                      maxLines: 10,
                      style: const TextStyle(
                        fontFamily: "Josefin Sans",
                        fontSize: 15,
                        height: 1.6,
                      ),
                      decoration: InputDecoration(
                        hintText: "Escreva sua nota aqui...",
                        hintStyle: TextStyle(
                          fontFamily: "Josefin Sans",
                          fontSize: 15,
                        ),
                        filled: true,
                        fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(15),
                          borderSide: BorderSide.none,
                        ),
                        contentPadding: EdgeInsets.all(16),
                      ),
                    ),

                    SizedBox(height: 8),
                    Text(
                      "Conteúdo da nota",
                      style: TextStyle(
                        fontFamily: "Montserrat",
                        fontSize: 13,
                        color: Color.fromRGBO(255, 255, 255, 0.9),
                      ),
                    ),

                    SizedBox(height: 30),

                    // Botão Salvar (igual ao Perfil)
                    Center(
                      child: ElevatedButton(
                        onPressed: _salvar,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                          minimumSize: Size(280, 48),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                        ),
                        child: Text(
                          "Salvar",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            fontWeight: FontWeight.bold,
                            fontSize: 18,
                            color: Colors.white,
                          ),
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
    );
  }
}
