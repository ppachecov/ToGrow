import l from '../../common/logger';
import db from './temperatura.db';

class TemperaturaService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return db.all();
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

}

export default new TemperaturaService();
