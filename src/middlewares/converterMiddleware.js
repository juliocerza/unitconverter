function validateConversionParams(req, res, next) {
  const { fromUnit, toUnit, value } = req.query;

  if (!fromUnit || !toUnit || !value) {
    return res.status(400).json({ error: "Parâmetros de conversão ausentes" });
  }

  const validUnits = ["meters", "kilometers"];
  if (!validUnits.includes(fromUnit) || !validUnits.includes(toUnit)) {
    return res.status(400).json({ error: "Unidade de medida não suportada" });
  }

  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
    return res.status(400).json({ error: "Valor deve ser um número" });
  }

  req.conversionParams = { fromUnit, toUnit, value: parsedValue };

  next();
}

module.exports = validateConversionParams;
