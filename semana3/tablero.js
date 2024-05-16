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
    primeraCasilla.textContent = 0; 
    primeraFila.appendChild(primeraCasilla);
    tablero.appendChild(primeraFila);

    for (let fila = 1; fila < i; fila++) {
        const filaElemento = document.createElement("tr");
        for (let columna = 0; columna < j; columna++) {
            const casilla = document.createElement("td");
            casilla.classList.add("Miclase");
            casilla.textContent = Math.floor(contador / 2) + 1;
            contador++;
            filaElemento.appendChild(casilla);
        }
        tablero.appendChild(filaElemento);
    }
};