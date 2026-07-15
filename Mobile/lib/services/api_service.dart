import 'dart:convert';

import 'package:areti_vitae_mobile/model/user_model.dart';
import 'package:http/http.dart' as http;

class ApiService {
  static const String baseUrl = "http://10.0.2.2:8081/apiAv";

  Future<UserModel> cadastrarUsuario(UserModel usuario) async {
    try {
      final response = await http.post(
        Uri.parse("$baseUrl/Register"),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode(usuario.toJson()),
      );

      if (response.statusCode == 201) {
        return UserModel.fromJson(jsonDecode(response.body));
      }

      throw Exception(
        "Erro ao cadastrar usuário. Código: ${response.statusCode}",
      );
    } catch (e) {
      throw Exception("Erro de conexão: $e");
    }
  }
}
