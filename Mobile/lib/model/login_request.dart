class LoginRequest {
  final String usuario;
  final String senha;

  LoginRequest({required this.usuario, required this.senha});

  Map<String, dynamic> toJson() => {'usuario': usuario, 'senha': senha};
}
