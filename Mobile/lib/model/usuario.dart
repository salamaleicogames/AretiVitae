class Usuario {
  late String _usuario;
  late String _email;
  late String _data;
  // late String _senha;

  get usuario => this._usuario;

  set usuario(value) => this._usuario = value;

  get email => this._email;

  set email(value) => this._email = value;

  get data => this._data;

  set data(value) => this._data = value;

  // get senha => this._senha;

  // set senha(value) => this._senha = value;

  Usuario(this._usuario, this._email, this._data);
}
