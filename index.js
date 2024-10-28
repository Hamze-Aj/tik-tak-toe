
const first = document.querySelector('.player1')
const second = document.querySelector('.player2')

const player1 = prompt('Enter the first player')
const player2 = prompt('Enter the second player')

first.textContent = player1
second.textContent = player2

const player = (name) => {

   const win = () => {
    return `congrats ${name} you won`
   }

    return {
      win
    }
}



const displayController =(() => {
     
    const squares = document.querySelectorAll('.square')
    let playerTurn = 'x'

    squares.forEach((squares, index) => {
        squares.addEventListener('click', () => {



            if (playerTurn == 'x') {
                
                squares.textContent = 'X'
                squares.disabled = true;
                playerTurn = 'o'   
                gameBoard.updateArray()   
                gameBoard.checkWinner()          
            }

            else {
                squares.textContent = 'O'
                squares.disabled = true;
                playerTurn = 'x'
                gameBoard.updateArray()      
                gameBoard.checkWinner()          



            }
            
        })

        let reset = document.querySelector('.reset')
        reset.addEventListener('click', () => {
            squares.textContent = ""
           })
        
    });
    

})();

const gameBoard = (() => {
    let array = ['','','','','','','','','']

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
        
    }

    return {array, updateArray, checkWinner}
})();










