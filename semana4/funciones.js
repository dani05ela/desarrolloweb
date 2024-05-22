let valor1 = 0;
let valor2 = 0;
let tipo1 = "";
let tipo2 = "";

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    let dropdown = this.closest('.dropdown').querySelector('.dropdown-toggle');
    dropdown.textContent = this.textContent;
    dropdown.dataset.value = this.dataset.value;
  });
});

function convertir() {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  let tipo1 = document.querySelector('#primerMedida .dropdown-toggle').dataset.value;
  let tipo2 = document.querySelector('#segundaMedida .dropdown-toggle').dataset.value;
  let resultado;

  // Determinar cuál input está lleno y cuál está vacío
  if (valor1 && !valor2) {
    valor1 = parseFloat(valor1);
    resultado = convertirTemperatura(valor1, tipo1, tipo2);
  } else if (!valor1 && valor2) {
    valor2 = parseFloat(valor2);
    resultado = convertirTemperatura(valor2, tipo2, tipo1);
  } else {
    alert("Por favor, ingrese un valor en uno de los campos.");
    return;
  }
  console.log(resultado);

  document.getElementById("resultado").value = resultado;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

function kelvinToFahrenheit(kelvin) {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}


function convertirTemperatura(valor, tipoInicial, tipoFinal) {
  if (tipoInicial === 'celsius' && tipoFinal === 'fahrenheit') {
    return celsiusToFahrenheit(valor);
  } else if (tipoInicial === 'fahrenheit' && tipoFinal === 'celsius') {
    return fahrenheitToCelsius(valor);
  } else if (tipoInicial === 'kelvin' && tipoFinal === 'celsius') {
    return kelvinToCelsius(valor);
  } else if (tipoInicial === 'celsius' && tipoFinal === 'kelvin') {
    return celsiusToKelvin(valor);
  } else if (tipoInicial === 'fahrenheit' && tipoFinal === 'kelvin') {
    return fahrenheitToKelvin(valor);
  } else if (tipoInicial === 'kelvin' && tipoFinal === 'fahrenheit') {
    return kelvinToFahrenheit(valor);
  }
}
