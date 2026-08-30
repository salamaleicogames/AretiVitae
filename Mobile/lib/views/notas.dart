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
  // Lista de notas pré cadastradas
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

  // Abre o modal para digitar o título da nova nota
  void novaNota() {
    // if (notas.length >= 10) {
    //   ScaffoldMessenger.of(context).showSnackBar(
    //     SnackBar(
    //       content: Text(
    //         "Limite de 10 notas atingido!",
    //         style: TextStyle(color: Colors.black),
    //       ),
    //       backgroundColor: Colors.yellow,
    //       duration: Duration(seconds: 2),
    //       behavior: SnackBarBehavior.floating,
    //       margin: EdgeInsets.all(20),
    //     ),
    //   );
    //   return;
    // }

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

  // Navega para a tela de edição
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

  // Remove uma nota da lista
  void excluirNota(NotasModel nota) async {
    nota.ativo = 1;

    final atualizada = await NotasRepository().atualizarNota(nota);

    setState(() => notas.remove(nota));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          //CABEÇALHO (Data da Nota)
          Container(
            color: Color.fromRGBO(101, 123, 191, 1),
            padding: EdgeInsets.only(
              top: MediaQuery.of(context).padding.top + 10,
              left: 20,
              right: 20,
              bottom: 16,
            ),
            child: Row(
              children: [
                const Text(
                  "Notas",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.w700,
                    fontSize: 22,
                    color: Color.fromARGB(255, 255, 255, 198),
                  ),
                ),

                SizedBox(width: 20),

                //NOVA NOTA
                ElevatedButton(
                  onPressed: novaNota,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Color.fromRGBO(208, 227, 255, 1),
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                    ),
                    padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    elevation: 0,
                  ),
                  child: Text(
                    "+ Nova nota",
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontWeight: FontWeight.w700,
                      fontSize: 13,
                    ),
                  ),
                ),
              ],
            ),
          ),

          // ── Corpo azul escuro com a lista ───────────────
          Expanded(
            child: Container(
              color: Color.fromRGBO(77, 84, 131, 1),
              child: Column(
                children: [
                  // Subtítulo: quantidade de notas
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
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
                        Container(width: 1, height: 14, color: Colors.white30),
                        SizedBox(width: 10),
                        Text(
                          "limite de 1 000 caracteres por nota",
                          style: TextStyle(
                            fontFamily: "Montserrat",
                            fontSize: 12,
                            color: Colors.white54,
                          ),
                        ),
                      ],
                    ),
                  ),

                  // Lista de cards ou tela vazia
                  Expanded(
                    child: notas.isEmpty
                        ? _TelaVazia(onNova: novaNota)
                        : ListView.builder(
                            padding: EdgeInsets.fromLTRB(20, 4, 20, 20),
                            itemCount: notas.length,
                            itemBuilder: (_, i) => _CardNota(
                              nota: notas[i],
                              onEditar: () => editarNota(notas[i]),
                              onExcluir: () => excluirNota(notas[i]),
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
  }
}

//TEMPLATE - CARD DA NOTA
class _CardNota extends StatelessWidget {
  final NotasModel nota;
  final VoidCallback onEditar;
  final VoidCallback onExcluir;

  const _CardNota({
    required this.nota,
    required this.onEditar,
    required this.onExcluir,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onEditar,
      child: Container(
        margin: EdgeInsets.only(bottom: 14),
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Color.fromRGBO(255, 255, 255, 0.12),
          borderRadius: BorderRadius.circular(15),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Linha do título + botões
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: Text(
                    nota.titulo,
                    style: TextStyle(
                      fontFamily: "Montserrat",
                      fontWeight: FontWeight.w700,
                      fontSize: 15,
                      color: Colors.white,
                    ),
                  ),
                ),

                // Botão editar
                IconButton(
                  icon: Icon(
                    Icons.edit_outlined,
                    color: Color.fromRGBO(145, 205, 255, 1),
                    size: 20,
                  ),
                  onPressed: onEditar,
                  padding: EdgeInsets.zero,
                  constraints: BoxConstraints(),
                ),

                const SizedBox(width: 8),

                // Botão excluir
                IconButton(
                  icon: Icon(
                    Icons.delete_outline,
                    color: Color(0xFFFF6B6B),
                    size: 20,
                  ),
                  onPressed: onExcluir,
                  padding: EdgeInsets.zero,
                  constraints: BoxConstraints(),
                ),
              ],
            ),

            // Data
            Text(
              nota.data,
              style: TextStyle(
                fontFamily: "Josefin Sans",
                fontSize: 12,
                color: Colors.white60,
              ),
            ),

            // Preview do texto (se tiver)
            if (nota.texto.isNotEmpty) ...[
              SizedBox(height: 8),
              Text(
                nota.texto,
                maxLines: 3,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                  fontFamily: "Josefin Sans",
                  fontSize: 13,
                  color: Colors.white70,
                  height: 1.5,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

// TELA VAZIA
class _TelaVazia extends StatelessWidget {
  final VoidCallback onNova;
  const _TelaVazia({required this.onNova});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Icon(Icons.note_add_outlined, size: 60, color: Colors.white24),
          const SizedBox(height: 16),
          const Text(
            "Nenhuma nota ainda",
            style: TextStyle(
              fontFamily: "Montserrat",
              fontWeight: FontWeight.w600,
              fontSize: 16,
              color: Colors.white38,
            ),
          ),
          const SizedBox(height: 10),
          TextButton(
            onPressed: onNova,
            child: const Text(
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

// ─────────────────────────────────────────────
//  MODAL: NOVA NOTA
// ─────────────────────────────────────────────
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
    return Dialog(
      backgroundColor: const Color.fromRGBO(88, 112, 184, 1),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // Cabeçalho
            Row(
              children: [
                const Spacer(),
                const Text(
                  "NOVA NOTA",
                  style: TextStyle(
                    fontFamily: "Montserrat",
                    fontWeight: FontWeight.w700,
                    fontSize: 14,
                    color: Colors.white,
                    letterSpacing: 1.5,
                  ),
                ),
                const Spacer(),
                GestureDetector(
                  onTap: onCancelar,
                  child: const Icon(
                    Icons.close,
                    color: Colors.white70,
                    size: 20,
                  ),
                ),
              ],
            ),

            const Divider(color: Colors.white24, height: 24),

            const Text(
              "Escolha um título para a sua nota",
              style: TextStyle(
                fontFamily: "Montserrat",
                fontSize: 13,
                color: Colors.white70,
              ),
            ),

            const SizedBox(height: 14),

            // Campo título
            SizedBox(
              height: 48,
              child: TextField(
                controller: controller,
                autofocus: true,
                style: const TextStyle(
                  fontFamily: "Josefin Sans",
                  fontSize: 15,
                ),
                decoration: InputDecoration(
                  hintText: "Título da nota...",
                  hintStyle: const TextStyle(
                    fontFamily: "Josefin Sans",
                    fontSize: 15,
                  ),
                  filled: true,
                  fillColor: const Color.fromRGBO(255, 255, 255, 0.9),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(15),
                    borderSide: BorderSide.none,
                  ),
                ),
                onSubmitted: onCriar,
              ),
            ),

            const SizedBox(height: 20),

            // Botões
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: onCancelar,
                    style: OutlinedButton.styleFrom(
                      foregroundColor: Colors.white,
                      side: const BorderSide(color: Colors.white38),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                      padding: const EdgeInsets.symmetric(vertical: 13),
                    ),
                    child: const Text(
                      "Cancelar",
                      style: TextStyle(
                        fontFamily: "Montserrat",
                        fontWeight: FontWeight.w600,
                        fontSize: 14,
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: ElevatedButton(
                    onPressed: () => onCriar(controller.text),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color.fromRGBO(145, 205, 255, 1),
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                      padding: const EdgeInsets.symmetric(vertical: 13),
                      elevation: 0,
                    ),
                    child: const Text(
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
    );
  }
}
