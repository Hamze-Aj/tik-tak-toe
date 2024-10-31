
const first = document.querySelector('.player1')
const second = document.querySelector('.player2')

const player1 = prompt('Enter the first player')
const player2 = prompt('Enter the second player')

first.textContent = player1
second.textContent = player2


const player = (name) => {
   return name
}

const firstPlayer = player(player1)
const secondPlayer = player(player2)

let player1Score = 0;
let player2Score = 0;
const createElement = (name) => {


    const el = document.querySelector('.winComment')
    el.textContent = `congrats ${name} you won`
    if (name == 'Draw') {
    el.textContent = `its' a draw `
    
    return {
        el
    }
}

}
const updateScore = () => {
    if (gameBoard.checkWinner() === 'X') {
        player1Score++;
        document.querySelector('.player1Score').textContent = player1Score;
        
        
    }
    if (gameBoard.checkWinner() === 'O') {
        player2Score++;
        document.querySelector('.player2Score').textContent = player2Score;
    }
};

const gameFlow = () => {
    

    

    
    document.querySelectorAll('.square').forEach(square => {
        square.textContent = '';
        square.disabled = false;
    });
    displayController.setPlayerTurn('x');

    
    return {
        
    };
};


const displayController = (() => {
   
    const squares = document.querySelectorAll('.square')
    let playerTurn = 'x'

    squares.forEach((squares, index) => {
        squares.addEventListener('click', () => {

            if (playerTurn == 'x') {

                squares.textContent = 'X'
                squares.disabled = true;
                playerTurn = 'o'
                gameBoard.updateArray()

            }

            else {
                squares.textContent = 'O'
                squares.setAttribute('style', 'color:#FF6F61;')
                squares.disabled = true;
                playerTurn = 'x'
                gameBoard.updateArray()

            }

            if (gameBoard.checkWinner() && gameBoard.checkWinner() == 'X') {
                createElement(String(firstPlayer))
                
                gameFlow()
                updateScore();
                
            }
            else if (gameBoard.checkWinner() && gameBoard.checkWinner() == 'O') {
                createElement(String(secondPlayer))
                gameFlow()
                updateScore();

            }
            else if (gameBoard.checkWinner() && gameBoard.checkWinner() == 'Draw') {
                createElement('Draw')
                gameFlow()
                updateScore();
                
            }

        })

        let reset = document.querySelector('.reset')
        reset.addEventListener('click', () => {
            location.reload()
        })

    });
     
    return {
        setPlayerTurn(x) {
            playerTurn = x;
        }
    }

})();

const gameBoard = (() => {
    let array = ['', '', '', '', '', '', '', '', '']

    const squares = document.querySelectorAll('.square')

    const updateArray = () => {
        squares.forEach((squares, index) => {
            array[index] = squares.textContent;

        })
    }

    const checkWinner = () => {

        if (array[0] === 'X' && array[1] === 'X' && array[2] === 'X') return 'X';
        if (array[3] === 'X' && array[4] === 'X' && array[5] === 'X') return 'X';
        if (array[6] === 'X' && array[7] === 'X' && array[8] === 'X') return 'X';

        // Columns
        if (array[0] === 'X' && array[3] === 'X' && array[6] === 'X') return 'X';
        if (array[1] === 'X' && array[4] === 'X' && array[7] === 'X') return 'X';
        if (array[2] === 'X' && array[5] === 'X' && array[8] === 'X') return 'X';

        // Diagonals
        if (array[0] === 'X' && array[4] === 'X' && array[8] === 'X') return 'X';
        if (array[2] === 'X' && array[4] === 'X' && array[6] === 'X') return 'X';



        if (array[0] === 'O' && array[1] === 'O' && array[2] === 'O') return 'O';
        if (array[3] === 'O' && array[4] === 'O' && array[5] === 'O') return 'O';
        if (array[6] === 'O' && array[7] === 'O' && array[8] === 'O') return 'O';

        // Columns
        if (array[0] === 'O' && array[3] === 'O' && array[6] === 'O') return 'O';
        if (array[1] === 'O' && array[4] === 'O' && array[7] === 'O') return 'O';
        if (array[2] === 'O' && array[5] === 'O' && array[8] === 'O') return 'O';

        // Diagonals
        if (array[0] === 'O' && array[4] === 'O' && array[8] === 'O') return 'O';
        if (array[2] === 'O' && array[4] === 'O' && array[6] === 'O') return 'O';

        if (array.every(cell => cell)) {
            return "Draw"; // No empty spots left, and no winner
        }

        return "Ongoing"; // Game is still ongoing with possible moves left
    }

    return { array, updateArray, checkWinner }
})();










