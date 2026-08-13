import 'package:http/http.dart' as http;
import 'dart:convert';

class UserModel {
  int _id = 0;
  String _usuario = "";
  String _email = "";
  String _idade = "";
  String _senha = "";

  int get id => _id;
  set id(int value) => _id = value;

  String get usuario => _usuario;
  set usuario(String value) => _usuario = value;

  String get email => _email;
  set email(String value) => _email = value;

  String get idade => _idade;
  set idade(String value) => _idade = value;

  String get senha => _senha;
  set senha(String value) => _senha = value;

  UserModel();

  UserModel.fromJson(Map<String, dynamic> json) {
    _id = json["id"] ?? 0;
    _usuario = json["username"] ?? "";
    _email = json["email"] ?? "";
    _idade = json["idade"] ?? "";
    _senha = json["senha"] ?? "";
  }

  static Future<UserModel?> login(String email, String senha) async {
    final url = Uri.parse("http://localhost:8081/apiAv/Login");

    final response = await http.post(
      url,
      headers: {"Content-Type": "application/json"},
      body: jsonEncode({"email": email, "senha": senha}),
    );

    if (response.statusCode == 200) {
      return UserModel.fromJson(jsonDecode(response.body));
    }

    return null;
  }
}
