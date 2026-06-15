class Cnotas {
  late String _titulo;
  late String _data;
  late String _texto;

  get titulo => this._titulo;

  set titulo(value) => this._titulo = value;

  get data => this._data;

  set data(value) => this._data = value;

  get texto => this._texto;

  set texto(value) => this._texto = value;

  Cnotas(this._titulo, this._data, this._texto);
  Cnotas.edicao(this._titulo, this._texto);
}
