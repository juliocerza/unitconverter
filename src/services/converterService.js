class ConverterService {
  constructor(factors) {
    this.conversionFactors = factors;
  }
  execute(data) {
    const fromUnit = data.fromUnit;
    const toUnit = data.toUnit;
    const value = parseFloat(data.value);

    const temperatureConversions = {
      grades: {
        fahrenheit: (val) =>
          new Temperature().GradesToFahrenheit(val).toFixed(2),
      },
      fahrenheit: {
        grades: (val) => new Temperature().FahrenheitToGrades(val).toFixed(2),
      },
    };

    if (temperatureConversions[fromUnit]?.[toUnit]) {
      return temperatureConversions[fromUnit][toUnit](value);
    }

    const baseValue = value / this.conversionFactors[fromUnit];
    const convertedValue = baseValue * this.conversionFactors[toUnit];
    return convertedValue;
  }
}

module.exports = ConverterService;
