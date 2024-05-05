let currentPlayer = 1; // Jugador 1 es la bolita y Jugador 2 es el palito
let player1Score = 0;
let player2Score = 0;
const player1ScoreElement = document.getElementById('player1Score');
const player2ScoreElement = document.getElementById('player2Score');
const gameBoard = document.getElementById('gameBoard');
const cells = gameBoard.querySelectorAll('.cell');

function makeMove(cellIndex) {
    if (!cells[cellIndex].textContent) {
        cells[cellIndex].textContent = currentPlayer === 1 ? '●' : '│';
        checkWinner();
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    for (let condition of winningConditions) {
        if (
            cells[condition[0]].textContent &&
            cells[condition[0]].textContent === cells[condition[1]].textContent &&
            cells[condition[0]].textContent === cells[condition[2]].textContent
        ) {
            if (cells[condition[0]].textContent === '●') {
                player1Score++;
                player1ScoreElement.textContent = `Jugador 1: ${player1Score}`;
            } else {
                player2Score++;
                player2ScoreElement.textContent = `Jugador 2: ${player2Score}`;
            }
            resetBoard();
            return;
        }
    }

    // Si hay empate
    if ([...cells].every(cell => cell.textContent)) {
        resetBoard();
    }
}

function resetBoard() {
    cells.forEach(cell => cell.textContent = '');
}
