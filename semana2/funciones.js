let miMateria = "";
let miPromedio = 0;

function contLetras() {
  miMateria = document.getElementById("materia").value;
  let numMateria = 0;

  if (miMateria == "" || miMateria == " ") {
    alert("Ingresa una materia");
  } else {
    let vectorM = miMateria.split("");

    for (let i = 0; i < vectorM.length; i++) {
      if (vectorM[i] == " ") {
      } else {
        numMateria++;
      }
    }
    document.getElementById("resMateria").value = "La Materia tiene " + numMateria + " caracteres";
  }
}

function calPromedio() {
  miPromedio = document.getElementById("promedio").value;

  if (miPromedio == "" || miPromedio == " ") {
    alert("Ingresa tus notas");
  } else {
    let vectorP = miPromedio.split("-");
    let sumNotas = 0;

    for (let i = 0; i < vectorP.length; i++) {
      sumNotas += parseInt(vectorP[i]);
    }

    miPromedio = sumNotas / vectorP.length;
  }
  document.getElementById("resPromedio").value = "Tu promedio es: " + miPromedio;
}

function nomEstudiante() {
  let miEstudiante = document.getElementById("estudiante").value;

  if (miEstudiante == "") {
    alert("Ingresa un nombre");
  } else {
    alert(
      "Estudiante: " +
        miEstudiante +
        "\nMateria: " +
        miMateria +
        "\nPromedio: " +
        miPromedio
    );
  } 
}

function audio() {
  var audio = document.getElementById("rAudio");
  audio.play();
}