class NotasModel {
  int? _id;
  int? _userId;
  late String _titulo;
  late String _data;
  late String _texto;
  int? _ativo;

  get id => this._id;
  set id(value) => this._id = value;

  get userId => this._userId;
  set userId(value) => this._userId = value;

  get titulo => this._titulo;
  set titulo(value) => this._titulo = value;

  get data => this._data;
  set data(value) => this._data = value;

  get texto => this._texto;
  set texto(value) => this._texto = value;

  get ativo => this._ativo;
  set ativo(value) => this._ativo = value;

  NotasModel(this._titulo, this._data, this._texto);
  NotasModel.edicao(this._titulo, this._texto);

  NotasModel.fromJson(Map<String, dynamic> json) {
    _id = json["id"];
    _userId = json["user"]["id"];
    _titulo = json["title"] ?? "";
    _texto = json["note"] ?? "";
    _data = "";
    _ativo = json["ativo"] ?? 1;
  }

  Map<String, dynamic> toJsonCriacao() {
    return {"userId": _userId, "title": _titulo, "note": _texto, "ativo": 1};
  }

  Map<String, dynamic> toJsonAtualizacao() {
    return {
      "id": _id,
      "user": {"id": _userId},
      "title": _titulo,
      "note": _texto,
      "ativo": _ativo,
    };
  }
}
