const conversionFactors = require("../utils/factors");

function validateConversionParams(req, res, next) {
  const { fromUnit, toUnit, value } = req.body;

  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
    return res.status(400).json({ error: "Valor deve ser um número" });
  }

  if (!fromUnit || !toUnit || !value) {
    return res.status(400).json({ error: "Parâmetros de conversão ausentes" });
  }

  const validUnits = conversionFactors;
  if (!validUnits[fromUnit] || !validUnits[toUnit]) {
    return res.status(400).json({ error: "Unidade de medida não suportada" });
  }

  req.conversionParams = { fromUnit, toUnit, value: parsedValue };

  next();
}

module.exports = validateConversionParams;
