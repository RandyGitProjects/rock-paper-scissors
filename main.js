var game = new Game ()

//Query Selectors
var buttons = document.querySelector(".main")

//Event Listeners
buttons.addEventListener("click", function(event) {
    if (event.target.matches(".button")) {
        displayToken()
        game.switchPlayer()
    }
});

// buttons.forEach(button => button.addEventListener("click", () => {
//     game.currentPlayer.token = button.textContent
//     game.switchPlayer()
//     game.checkWin()
    
// }));

//Functions
function displayToken() {
    game.currentPlayer.token = event.target.textContent
}