const ConverterService = require("../services/converterService");
const factors = require("../utils/factors");

class ConverterController {
  handle(req, res) {
    const { body } = req;
    try {
      const converterService = new ConverterService(factors);
      const result = converterService.execute(body);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

const converterController = new ConverterController();

module.exports = converterController;
