
        const board = document.getElementById("board");
        const message = document.getElementById("message");
        let cells = Array(9).fill(null);
        let currentPlayer = "X";
        let gameActive = true;

        function renderBoard() {
            board.innerHTML = "";
            cells.forEach((cell, index) => {
                const cellDiv = document.createElement("div");
                cellDiv.classList.add("cell");
                cellDiv.textContent = cell;
                cellDiv.addEventListener("click", () => makeMove(index));
                board.appendChild(cellDiv);
            });
        }

        function makeMove(index) {
            if (!gameActive || cells[index] !== null) return;
            cells[index] = currentPlayer;
            renderBoard();
            if (checkWin()) {
                message.textContent = `${currentPlayer} Wins!`;
                gameActive = false;
            } else if (cells.every(cell => cell !== null)) {
                message.textContent = "It's a Draw!";
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }

        function checkWin() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            return winPatterns.some(pattern => {
                const [a, b, c] = pattern;
                return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
            });
        }

        function restartGame() {
            cells = Array(9).fill(null);
            currentPlayer = "X";
            gameActive = true;
            message.textContent = "";
            renderBoard();
        }

        renderBoard();
