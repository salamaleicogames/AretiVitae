class Usuario {
  late String _usuario;
  late String _senha;

  get usuario => this._usuario;

  set usuario(value) => this._usuario = value;

  get senha => this._senha;

  set senha(value) => this._senha = value;

  Usuario(this._usuario, this._senha);
}
