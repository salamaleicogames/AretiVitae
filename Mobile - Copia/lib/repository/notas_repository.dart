import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:areti_vitae_mobile/model/notas_model.dart';

class NotasRepository {
  //Endpoint base para as requisições das Notas
  final String baseUrl = "http://localhost:8081/apiAvNotes";

  //Lista as Notas criadas pelo usuário
  Future<List<NotasModel>> listarNotasPorUsuario(int userId) async {
    final url = Uri.parse("$baseUrl/User/$userId");
    final response = await http.get(url);

    if (response.statusCode == 200) {
      List<dynamic> data = jsonDecode(response.body);
      return data.map((json) => NotasModel.fromJson(json)).toList();
    } else {
      throw Exception("Erro ao carregar notas");
    }
  }

  //Cria uma nova Nota
  Future<NotasModel> criarNota(NotasModel nota) async {
    final url = Uri.parse("$baseUrl/Register");
    final response = await http.post(
      url,
      headers: {"Content-Type": "application/json"},
      body: jsonEncode(nota.toJsonCriacao()),
    );

    if (response.statusCode == 201) {
      return NotasModel.fromJson(jsonDecode(response.body));
    } else {
      throw Exception("Erro ao criar nota");
    }
  }

  //Atualiza os dados de uma nota
  Future<NotasModel> atualizarNota(NotasModel nota) async {
    final url = Uri.parse("$baseUrl/Update/${nota.id}");
    final response = await http.put(
      url,
      headers: {"Content-Type": "application/json"},
      body: jsonEncode(nota.toJsonAtualizacao()),
    );

    if (response.statusCode == 200) {
      return NotasModel.fromJson(jsonDecode(response.body));
    } else {
      throw Exception("Erro ao atualizar nota");
    }
  }
}
