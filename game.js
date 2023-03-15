class Game {
    constructor() {
        this.playerOne = new Player (1,);
        this.playerTwo = new Player(2,);
        this.winner = false;
        this.draw = false;
        this.gameData = []
        this.currentPlayer = this.playerOne
    }
    checkWin() {
        if (this.playerOne.token === "rock" && this.playerTwo.token === "scissors") {
            this.winner = true
            this.playerOne.wins ++
        } else if (this.playerOne.token === "paper" && this.playerTwo.token === "rock") {
            this.winner = true
            this.playerOne.wins ++
        } else if (this.playerOne.token === "scissors" && this.playerTwo.token === "paper") {
            this.winner = true
            this.playerOne.wins ++
        } else {
            this.playerTwo.wins ++
            this.winner = true
        }
    }

    switchPlayer() {
        if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo
            console.log("player 2's turn")
        } else {
            this.currentPlayer = this.playerOne
            console.log("player 1's turn")
        }
    }

    checkDraw() {
        if (this.playerOne.token === this.playerTwo.token) {
            this.draw = true 
        }
    }
}