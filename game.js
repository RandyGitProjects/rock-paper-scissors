class Game {
    constructor() {
        this.playerOne = new Player (1, "rock");
        this.playerTwo = new Player(1,"scissors");
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
        } else {
            this.currentPlayer = this.playerOne
        }
    }

    checkDraw() {
        if (this.playerOne.token === this.playerTwo.token) {
            this.draw = true 
        }
    }
}