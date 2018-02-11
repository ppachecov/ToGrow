class TemperaturaBaseDatos {
  constructor() {
    this._data = [];
    this._counter = 0;

    this.insert(23);
    this.insert(22);
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }

  insert(valor) {
    const record = {
      id: this._counter,
      valor,
    };

    this._counter += 1;
    this._data.push(record);

    return Promise.resolve(record);
  }
}

export default new TemperaturaBaseDatos();
