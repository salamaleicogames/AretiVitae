class Clogin {
  late String _usuario;
  late String _email;
  late String _dataNasc;
  late String _senha;

  get usuario => this._usuario;

  set usuario(value) => this._usuario = value;

  get email => this._email;

  set email(value) => this._email = value;

  get dataNasc => this._dataNasc;

  set dataNasc(value) => this._dataNasc = value;

  get senha => this._senha;

  set senha(value) => this._senha = value;
  // late String _senha;

  Clogin(this._usuario, this._senha);
  Clogin.cadastro(this._usuario, this._email, this._dataNasc, this._senha);
  Clogin.email(this._email);
}
