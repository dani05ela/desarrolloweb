document.addEventListener("DOMContentLoaded", () => {
    const chessboard = document.getElementById("chessboard");
    let queenPosition = { row: 0, col: 0 };

    function createBoard() {
        for (let i = 0; i < 64; i++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.dataset.row = Math.floor(i / 8);
            cell.dataset.col = i % 8;
            cell.addEventListener("click", () => moveQueen(cell.dataset.row, cell.dataset.col));
            chessboard.appendChild(cell);
        }
        placeQueen(queenPosition.row, queenPosition.col);
    }

    function placeQueen(row, col) {
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.classList.remove("queen");
            if (cell.dataset.row == row && cell.dataset.col == col) {
                cell.classList.add("queen");
                cell.textContent = "♕";
            } else {
                cell.textContent = "";
            }
        });
        queenPosition = { row: parseInt(row), col: parseInt(col) };
    }

    function isValidMove(row, col) {
        const currentRow = queenPosition.row;
        const currentCol = queenPosition.col;
        row = parseInt(row);
        col = parseInt(col);

        if (row === currentRow || col === currentCol || Math.abs(row - currentRow) === Math.abs(col - currentCol)) {
            return true;
        }
        return false;
    }

    function moveQueen(row, col) {
        if (isValidMove(row, col)) {
            placeQueen(row, col);
        } else {
            alert("Movimiento inválido");
        }
    }

    createBoard();
});
