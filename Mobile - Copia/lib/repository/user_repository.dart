import 'package:shared_preferences/shared_preferences.dart';
import 'package:areti_vitae_mobile/model/user_model.dart';

class UserRepository {
  static final UserRepository _instance = UserRepository._internal();

  factory UserRepository() {
    return _instance;
  }

  UserRepository._internal();

  UserModel? usuarioAtual;

  Future<void> salvarUsuario(UserModel usuario) async {
    usuarioAtual = usuario;

    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setInt("id", usuario.id);
    await prefs.setString("username", usuario.usuario);
    await prefs.setString("email", usuario.email);
    await prefs.setInt("idade", usuario.idade);
  }

  Future<UserModel?> carregarUsuario() async {
    if (usuarioAtual != null) {
      return usuarioAtual;
    }

    SharedPreferences prefs = await SharedPreferences.getInstance();
    int? id = prefs.getInt("id");
    String? username = prefs.getString("username");
    String? email = prefs.getString("email");
    int? idade = prefs.getInt("idade");

    if (id == null || username == null || email == null) {
      return null;
    }

    UserModel usuario = UserModel();
    usuario.id = id;
    usuario.usuario = username;
    usuario.email = email;
    usuario.idade = idade ?? 0;

    usuarioAtual = usuario;
    return usuarioAtual;
  }

  Future<void> limparUsuario() async {
    usuarioAtual = null;

    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.clear();
  }
}
