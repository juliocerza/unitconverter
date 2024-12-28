class Temperature {
  GradesToFahrenheit(value) {
    return (9 / 5) * value + 32;
  }

  FahrenheitToGrades(value) {
    return (5 / 9) * (value - 32);
  }
}
