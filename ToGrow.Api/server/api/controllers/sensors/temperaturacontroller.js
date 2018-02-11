import TemperaturaService from '../../services/temperatura.service';

export class TemperaturaController {
  all(req, res) {
    TemperaturaService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    TemperaturaService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(400).end();
      });
  }

  create(req, res) {
    TemperaturaService
      .create(req.body.temp)
      .then(r => res
        .status(200)
        .location(`/api/v1/temperatura/${r.id}`)
        .json(r));
  }
}

export default new TemperaturaController();

