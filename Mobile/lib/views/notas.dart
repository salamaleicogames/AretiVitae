import 'package:areti_vitae_mobile/model/notas_model.dart';
import 'package:areti_vitae_mobile/views/notas_edicao.dart';
import 'package:areti_vitae_mobile/repository/notas_repository.dart';
import 'package:areti_vitae_mobile/repository/user_repository.dart';
import 'package:flutter/material.dart';

class Notas extends StatefulWidget {
  const Notas({super.key});

  @override
  State<Notas> createState() => _NotasState();
}

class _NotasState extends State<Notas> {
  List<NotasModel> notas = [];
  bool carregando = true;

  @override
  void initState() {
    super.initState();
    carregarNotas();
  }

  Future<void> carregarNotas() async {
    final usuario = await UserRepository().carregarUsuario();
    final lista = await NotasRepository().listarNotasPorUsuario(usuario!.id);

    setState(() {
      notas = lista;
      carregando = false;
    });
  }

  String get _hoje {
    final now = DateTime.now();
    return "${now.day.toString().padLeft(2, '0')}/"
        "${now.month.toString().padLeft(2, '0')}/"
        "${now.year}";
  }

  void novaNota() {
    final ctrlTitulo = TextEditingController();

    showDialog(
      context: context,
      builder: (_) => _ModalNovaNota(
        controller: ctrlTitulo,
        onCriar: (titulo) {
          if (titulo.trim().isEmpty) return;

          final nova = NotasModel(titulo.trim(), "", "");

          Navigator.pop(context);
          editarNota(nova);
        },
        onCancelar: () => Navigator.pop(context),
      ),
    );
  }

  void editarNota(NotasModel nota) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => NotaEdicao(
          nota: nota,
          onSalvar: (titulo, texto) async {
            nota.titulo = titulo;
            nota.texto = texto;

            if (nota.id == null) {
              final usuario = await UserRepository().carregarUsuario();
              nota.userId = usuario!.id;

              final criada = await NotasRepository().criarNota(nota);

              setState(() {
                notas.add(criada);
              });
            } else {
              final atualizada = await NotasRepository().atualizarNota(nota);

              setState(() {
                nota.id = atualizada.id;
                nota.titulo = atualizada.titulo;
                nota.texto = atualizada.texto;
                nota.ativo = atualizada.ativo;
              });
            }
          },
        ),
      ),
    );
  }

  void excluirNota(NotasModel nota) async {
    nota.ativo = 1;

    await NotasRepository().atualizarNota(nota);

    setState(() => notas.remove(nota));

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          "Nota Excluída!",
          style: TextStyle(
            fontFamily: "Montserrat",
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: Color.fromRGBO(235, 103, 129, 1),
        duration: Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final bool isMobile = constraints.maxWidth < 600;
        final double paddingHorizontal = isMobile ? 16 : 28;
        final double tamanhoTitulo = isMobile ? 20 : 24;
        final double paddingCard = isMobile ? 12 : 16;
        final double tamanhoTextoCard = isMobile ? 14 : 16;
        final double espacamentoLista = isMobile ? 10 : 14;

        return Scaffold(
          body: Column(
            children: [
              Container(
                color: Color.fromRGBO(101, 123, 191, 1),
                padding: EdgeInsets.only(
                  top: MediaQuery.of(context).padding.top + 10,
                  left: paddingHorizontal,
                  right: paddingHorizontal,
                  bottom: isMobile ? 12 : 16,
                ),
                child: Row(
                  children: [
                    Text(
                      "Notas",
                      style: TextStyle(
                        fontFamily: "Montserrat",
                        fontWeight: FontWeight.w700,
                        fontSize: tamanhoTitulo,
                        color: Color.fromARGB(255, 250, 250, 243),
                      ),
                    ),
                    SizedBox(width: isMobile ? 12 : 20),
                    ElevatedButton(
                      onPressed: novaNota,
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Color.fromRGBO(208, 227, 255, 1),
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20),
                        ),
                        padding: EdgeInsets.symmetric(
                          horizontal: isMobile ? 12 : 16,
                          vertical: 8,
                        ),
                        elevation: 0,
                      ),
                      child: Text(
                        "+ Nova nota",
                        style: TextStyle(
                          fontFamily: "Montserrat",
                          fontWeight: FontWeight.w700,
                          fontSize: isMobile ? 12 : 13,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Expanded(
                child: Container(
                  color: Color.fromRGBO(77, 84, 131, 1),
                  child: Column(
                    children: [
                      Padding(
                        padding: EdgeInsets.symmetric(
                          horizontal: paddingHorizontal,
                          vertical: isMobile ? 10 : 12,
                        ),
                        child: Row(
                          children: [
                            Text(
                              "${notas.length} nota${notas.length != 1 ? 's' : ''}",
                              style: TextStyle(
                                fontFamily: "Montserrat",
                                fontWeight: FontWeight.w600,
                                fontSize: 13,
                                color: Colors.white70,
                              ),
                            ),
                            SizedBox(width: 10),
                            Container(
                              width: 1,
                              height: 14,
                              color: Colors.white30,
                            ),
                            SizedBox(width: 10),
                            Text(
                              "Limite de 1 000 caracteres por nota",
                              style: TextStyle(
                                fontFamily: "Montserrat",
                                fontSize: 12,
                                color: Colors.white54,
                              ),
                            ),
                          ],
                        ),
                      ),
                      Expanded(
                        child: notas.isEmpty
                            ? _TelaVazia(onNova: novaNota)
                            : Center(
                                child: ConstrainedBox(
                                  constraints: BoxConstraints(maxWidth: 850),
                                  child: ListView.builder(
                                    padding: EdgeInsets.fromLTRB(
                                      paddingHorizontal,
                                      4,
                                      paddingHorizontal,
                                      20,
                                    ),
                                    itemCount: notas.length,
                                    itemBuilder: (_, i) => _CardNota(
                                      nota: notas[i],
                                      isMobile: isMobile,
                                      paddingCard: paddingCard,
                                      tamanhoTexto: tamanhoTextoCard,
                                      espacamentoLista: espacamentoLista,
                                      onEditar: () => editarNota(notas[i]),
                                      onExcluir: () => excluirNota(notas[i]),
                                    ),
                                  ),
                                ),
                              ),
                      ),
                    ],
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

class _CardNota extends StatelessWidget {
  final NotasModel nota;
  final VoidCallback onEditar;
  final VoidCallback onExcluir;
  final bool isMobile;
  final double paddingCard;
  final double tamanhoTexto;
  final double espacamentoLista;

  const _CardNota({
    required this.nota,
    required this.onEditar,
    required this.onExcluir,
    required this.isMobile,
    required this.paddingCard,
    required this.tamanhoTexto,
    required this.espacamentoLista,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onEditar,
      child: Container(
        margin: EdgeInsets.only(bottom: espacamentoLista),
        padding: EdgeInsets.all(paddingCard),
        decoration: BoxDecoration(
          color: Color.fromRGBO(255, 255, 255, 0.12),
          borderRadius: BorderRadius.circular(15),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: Text(
                    nota.titulo,
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontWeight: FontWeight.w700,
                      fontSize: tamanhoTexto,
                      color: Colors.white,
                    ),
                  ),
                ),
                IconButton(
                  icon: Icon(
                    Icons.edit_outlined,
                    color: Color.fromRGBO(145, 205, 255, 1),
                    size: isMobile ? 19 : 21,
                  ),
                  onPressed: onEditar,
                  padding: EdgeInsets.zero,
                  constraints: BoxConstraints(),
                  visualDensity: VisualDensity.compact,
                ),
                SizedBox(width: 8),
                IconButton(
                  icon: Icon(
                    Icons.delete_outline,
                    color: Color(0xFFFF6B6B),
                    size: isMobile ? 19 : 21,
                  ),
                  onPressed: onExcluir,
                  padding: EdgeInsets.zero,
                  constraints: BoxConstraints(),
                  visualDensity: VisualDensity.compact,
                ),
              ],
            ),
            Text(
              nota.data,
              style: TextStyle(
                fontFamily: "Josefin Sans",
                fontSize: isMobile ? 11 : 12,
                color: Colors.white60,
              ),
            ),
            if (nota.texto.isNotEmpty) ...[
              SizedBox(height: 6),
              Text(
                nota.texto,
                maxLines: 3,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  fontFamily: "Josefin Sans",
                  fontSize: isMobile ? 12 : 13,
                  color: Colors.white70,
                  height: 1.4,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _TelaVazia extends StatelessWidget {
  final VoidCallback onNova;

  const _TelaVazia({required this.onNova});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.note_add_outlined, size: 55, color: Colors.white24),
          SizedBox(height: 12),
          Text(
            "Nenhuma nota ainda",
            style: TextStyle(
              fontFamily: "Montserrat",
              fontWeight: FontWeight.w600,
              fontSize: 16,
              color: Colors.white38,
            ),
          ),
          SizedBox(height: 8),
          TextButton(
            onPressed: onNova,
            child: Text(
              "Criar primeira nota →",
              style: TextStyle(
                fontFamily: "Montserrat",
                fontSize: 13,
                color: Color.fromRGBO(145, 205, 255, 1),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _ModalNovaNota extends StatelessWidget {
  final TextEditingController controller;
  final void Function(String titulo) onCriar;
  final VoidCallback onCancelar;

  const _ModalNovaNota({
    required this.controller,
    required this.onCriar,
    required this.onCancelar,
  });

  @override
  Widget build(BuildContext context) {
    final bool isMobile = MediaQuery.of(context).size.width < 600;

    return Dialog(
      backgroundColor: Color.fromRGBO(88, 112, 184, 1),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: EdgeInsets.all(isMobile ? 18 : 24),
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: 440),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                children: [
                  Spacer(),
                  Text(
                    "NOVA NOTA",
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontWeight: FontWeight.w700,
                      fontSize: 14,
                      color: Colors.white,
                      letterSpacing: 1.5,
                    ),
                  ),
                  Spacer(),
                  GestureDetector(
                    onTap: onCancelar,
                    child: Icon(Icons.close, color: Colors.white70, size: 20),
                  ),
                ],
              ),
              Divider(color: Colors.white24, height: 24),
              Text(
                "Escolha um título para a sua nota",
                style: TextStyle(
                  fontFamily: "Montserrat",
                  fontSize: 13,
                  color: Colors.white70,
                ),
              ),
              SizedBox(height: isMobile ? 10 : 14),
              SizedBox(
                height: 48,
                child: TextField(
                  controller: controller,
                  autofocus: true,
                  style: TextStyle(fontFamily: "Josefin Sans", fontSize: 15),
                  decoration: InputDecoration(
                    hintText: "Título da nota...",
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
                  onSubmitted: onCriar,
                ),
              ),
              SizedBox(height: isMobile ? 16 : 20),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: onCancelar,
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.white,
                        side: BorderSide(color: Colors.white38),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                        ),
                        padding: EdgeInsets.symmetric(vertical: 12),
                      ),
                      child: Text(
                        "Cancelar",
                        style: TextStyle(
                          fontFamily: "Montserrat",
                          fontWeight: FontWeight.w600,
                          fontSize: 14,
                        ),
                      ),
                    ),
                  ),
                  SizedBox(width: 10),
                  Expanded(
                    child: ElevatedButton(
                      onPressed: () => onCriar(controller.text),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Color.fromRGBO(145, 205, 255, 1),
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                        ),
                        padding: EdgeInsets.symmetric(vertical: 12),
                        elevation: 0,
                      ),
                      child: Text(
                        "Criar nota",
                        style: TextStyle(
                          fontFamily: "Montserrat",
                          fontWeight: FontWeight.w700,
                          fontSize: 14,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
