function convertir() {
  const input1 = parseFloat(document.getElementById('input1').value);
  const unit1 = document.getElementById('unit1').value;
  const input2 = parseFloat(document.getElementById('input2').value);
  const unit2 = document.getElementById('unit2').value;
  const errorDiv = document.getElementById('error');
  let result;

  errorDiv.textContent = '';

  if (!isNaN(input1)) {
      result = convertirTemperatura(input1, unit1, unit2);
      document.getElementById('result').value = result;
  } else if (!isNaN(input2)) {
      result = convertirTemperatura(input2, unit2, unit1);
      document.getElementById('result').value = result;
  } else {
      errorDiv.textContent = 'Por favor ingrese un valor válido en al menos uno de los campos.';
  }
}

function convertirTemperatura(value, fromUnit, toUnit) {
  let celsiusValue;

  switch (fromUnit) {
      case 'celsius':
          celsiusValue = value;
          break;
      case 'fahrenheit':
          celsiusValue = (value - 32) * 5 / 9;
          break;
      case 'kelvin':
          celsiusValue = value - 273.15;
          break;
      case 'rankine':
          celsiusValue = (value - 491.67) * 5 / 9;
          break;
      case 'reamur':
          celsiusValue = value * 5 / 4;
          break;
      default:
          return 'Unidad no válida';
  }

  let result;
  switch (toUnit) {
      case 'celsius':
          result = celsiusValue;
          break;
      case 'fahrenheit':
          result = (celsiusValue * 9 / 5) + 32;
          break;
      case 'kelvin':
          result = celsiusValue + 273.15;
          break;
      case 'rankine':
          result = (celsiusValue * 9 / 5) + 491.67;
          break;
      case 'reamur':
          result = celsiusValue * 4 / 5;
          break;
      default:
          return 'Unidad no válida';
  }

  return result;
}
