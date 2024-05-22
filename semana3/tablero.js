generar = () => {
    let i = parseInt(document.getElementById("fila").value);
    let j = parseInt(document.getElementById("columna").value);
    alert("Generando tablero");
    const tablero = document.getElementById("tablero");
    tablero.innerHTML = "";
    let contador = 0;
    const primeraFila = document.createElement("tr");
    const primeraCasilla = document.createElement("td");
    primeraCasilla.classList.add("Miclase");
    primeraFila.appendChild(primeraCasilla);
    tablero.appendChild(primeraFila);


    for (let fila = 1; fila < i; fila++) {
        const filaElemento = document.createElement("tr");
        for (let columna = 0; columna < j; columna++) {
          const casilla = document.createElement("td");
          casilla.classList.add("Miclase");
          let numero;
          if (fila === 1 && columna === 0) {
            numero = 0; // Establecer el valor en 0 para la posición 0,0
          } else {
            numero = Math.floor(contador / 2) + 1;
            contador++;
          }
          casilla.textContent = numero;
          if (numero % 2 === 0) {
            casilla.style.backgroundColor = "red"; // Pintar de rojo si es par
          } else {
            casilla.style.backgroundColor = "blue"; // Pintar de azul si es impar
          }
          filaElemento.appendChild(casilla);
        }
        tablero.appendChild(filaElemento);
      }
};

