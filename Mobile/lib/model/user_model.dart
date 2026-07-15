class UserModel {
  final String? usuario;
  final String email;
  final String? dataNasc;
  final String? senha;

  UserModel({this.usuario, required this.email, this.dataNasc, this.senha});

  UserModel.email(this.email) : usuario = null, dataNasc = null, senha = null;
  UserModel.login(this.usuario, this.senha) : email = "", dataNasc = null;

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      usuario: json['usuario'],
      email: json['email'],
      dataNasc: json['dataNasc'],
      senha: json['senha'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'usuario': usuario,
      'email': email,
      'dataNasc': dataNasc,
      'senha': senha,
    };
  }
}
