class ConverterService {
  constructor(factors) {
    this.conversionFactors = factors;
  }
  execute(data) {
    const fromUnit = data.fromUnit;
    const toUnit = data.toUnit;
    const value = parseFloat(data.value);

    if (isNaN(value)) {
      return { err: "Número inválido!" };
    }

    if (
      !this.conversionFactors[fromUnit] ||
      !this.conversionFactors[toUnit] ||
      !fromUnit ||
      !toUnit
    ) {
      throw new Error("Unidade inválida!");
    }

    const baseValue = value / this.conversionFactors[fromUnit];
    const convertedValue = baseValue * this.conversionFactors[toUnit];
    return convertedValue;
  }
}

module.exports = ConverterService;
