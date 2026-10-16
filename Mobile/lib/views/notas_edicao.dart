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

  // Salva a nota e retorna para a lista
  void _salvar() {
    final titulo = txtTitulo.text.trim();
    final texto = txtTexto.text.trim();

    if (titulo.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
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
      SnackBar(
        content: Text(
          "Nota salva com sucesso!",
          style: TextStyle(
            fontFamily: "Montserrat",
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: Color.fromARGB(255, 78, 190, 82),
      ),
    );

    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final bool isMobile = constraints.maxWidth < 600;
        final double paddingHorizontal = isMobile ? 16 : 32;
        final double paddingVertical = isMobile ? 20 : 30;
        final double tamanhoData = isMobile ? 17 : 22;
        final double alturaCabecalho = isMobile ? 100 : 120;
        final double larguraBotao = isMobile ? constraints.maxWidth - 48 : 280;
        final double tamanhoTexto = isMobile ? 14 : 15;

        return Scaffold(
          backgroundColor: Color.fromRGBO(77, 84, 131, 1),
          body: Column(
            children: [
              // Cabeçalho
              Container(
                height: alturaCabecalho + MediaQuery.of(context).padding.top,
                color: Color.fromRGBO(101, 123, 191, 1),
                padding: EdgeInsets.only(
                  top: MediaQuery.of(context).padding.top + 4,
                  left: isMobile ? 6 : 16,
                  right: isMobile ? 12 : 24,
                ),
                child: Row(
                  children: [
                    IconButton(
                      icon: Icon(
                        Icons.arrow_back_ios_new,
                        color: Colors.white,
                        size: isMobile ? 18 : 20,
                      ),
                      onPressed: () => Navigator.pop(context),
                    ),
                    Spacer(),
                    Flexible(
                      child: Text(
                        widget.nota.data,
                        textAlign: TextAlign.end,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          fontFamily: "Josefin Sans",
                          fontSize: tamanhoData,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              // Card de edição
              Expanded(
                child: SingleChildScrollView(
                  padding: EdgeInsets.symmetric(
                    horizontal: paddingHorizontal,
                    vertical: paddingVertical,
                  ),
                  child: Center(
                    child: ConstrainedBox(
                      constraints: BoxConstraints(maxWidth: 750),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(
                            height: 48,
                            child: TextField(
                              controller: txtTitulo,
                              style: TextStyle(
                                fontFamily: "Josefin Sans",
                                fontSize: tamanhoTexto,
                              ),
                              decoration: InputDecoration(
                                hintText: "Título da nota",
                                hintStyle: TextStyle(
                                  fontFamily: "Josefin Sans",
                                  fontSize: tamanhoTexto,
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
                              fontSize: isMobile ? 12 : 13,
                              color: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                          SizedBox(height: isMobile ? 20 : 25),
                          TextField(
                            controller: txtTexto,
                            minLines: isMobile ? 8 : 10,
                            maxLines: isMobile ? 12 : 16,
                            style: TextStyle(
                              fontFamily: "Josefin Sans",
                              fontSize: tamanhoTexto,
                              height: 1.6,
                            ),
                            decoration: InputDecoration(
                              hintText: "Escreva sua nota aqui...",
                              hintStyle: TextStyle(
                                fontFamily: "Josefin Sans",
                                fontSize: tamanhoTexto,
                              ),
                              filled: true,
                              fillColor: Color.fromRGBO(255, 255, 255, 0.9),
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: BorderSide.none,
                              ),
                              contentPadding: EdgeInsets.all(
                                isMobile ? 12 : 16,
                              ),
                            ),
                          ),
                          SizedBox(height: 8),
                          Text(
                            "Conteúdo da nota",
                            style: TextStyle(
                              fontFamily: "Montserrat",
                              fontSize: isMobile ? 12 : 13,
                              color: Color.fromRGBO(255, 255, 255, 0.9),
                            ),
                          ),
                          SizedBox(height: isMobile ? 24 : 30),
                          Center(
                            child: SizedBox(
                              width: larguraBotao.clamp(0.0, 320.0),
                              child: ElevatedButton(
                                onPressed: _salvar,
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
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                ),
                                child: Text(
                                  "Salvar",
                                  style: TextStyle(
                                    fontFamily: "Montserrat",
                                    fontWeight: FontWeight.bold,
                                    fontSize: isMobile ? 16 : 18,
                                    color: Colors.white,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
