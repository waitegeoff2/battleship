import "./styles.css";
import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import {displayHumanBoard, displayComputerBoard} from "./dom";
const shipButton = document.querySelector(".test-button")
const gameTitle = document.querySelector(".new-game")
const boardHumanDisplay = document.querySelector(".player-board")
const boardCompDisplay = document.querySelector(".computer-board")
const newGameBtn = document.querySelector(".new-game-btn")
const verticalBox = document.querySelector("#vertical")
const horizontalBox = document.querySelector("#horizontal")



let playerOne = new Player("Player")
playerOne.human = true

let playerComp = new Player("Computer")
playerComp.human = false

displayHumanBoard(playerOne);

let introShips = 0;
let vertical = true;
gameTitle.textContent = "Place your carrier ship on the game board";

export function setUpShips(choice) {

    let shipOrient;

    if(verticalBox.checked) {
        shipOrient = "ver"
    } else if(horizontalBox.checked) {
        shipOrient = "hor"
    }
    
    if(introShips == 0) {
        //ver or hor
        playerOne.gameboard.addShip(choice[0], choice[1], 5, shipOrient)
        boardHumanDisplay.innerHTML = '';
        displayHumanBoard(playerOne);
        //if a ship got added
        if(playerOne.gameboard.ships == 1) {
            gameTitle.textContent = "Place your battleship"
            introShips ++;
        }
    } else if(introShips == 1) {
        //ver or hor
        playerOne.gameboard.addShip(choice[0], choice[1], 4, shipOrient)
        boardHumanDisplay.innerHTML = '';
        displayHumanBoard(playerOne);
        //if a ship got added
        if(playerOne.gameboard.ships == 2) {
            gameTitle.textContent = "Place your cruiser"
            introShips ++;
        }
    } else if(introShips == 2) {
        //ver or hor
        playerOne.gameboard.addShip(choice[0], choice[1], 3, shipOrient)
        boardHumanDisplay.innerHTML = '';
        displayHumanBoard(playerOne);
        //if a ship got added
        if(playerOne.gameboard.ships == 3) {
            gameTitle.textContent = "Place your submarine"
            introShips ++;
        }
    } else if(introShips == 3) {
        //ver or hor
        playerOne.gameboard.addShip(choice[0], choice[1], 3, shipOrient)
        boardHumanDisplay.innerHTML = '';
        displayHumanBoard(playerOne);
        //if a ship got added
        if(playerOne.gameboard.ships == 4) {
            gameTitle.textContent = "Place your destroyer"
            introShips ++;
        }
    } else if(introShips == 4) {
        //ver or hor
        playerOne.gameboard.addShip(choice[0], choice[1], 2, shipOrient)
        boardHumanDisplay.innerHTML = '';
        displayHumanBoard(playerOne);
        //if a ship got added
        if(playerOne.gameboard.ships == 5) {
            gameTitle.textContent = "Ships placed. Press New Game to start."
            introShips ++;
        }
    }
}

newGameBtn.addEventListener("click", () => {
    if(playerOne.gameboard.ships != 5) {
        alert("Place all your ships before starting game.")
    } else {
        //create computer board
        //run the gameflow function
    }
})

function gameFlow() {

}


// playerOne.gameboard.addShip(1,2,3,"hor")


// function setUpShips(choice) {

    
//     //CHOICE is what you've clicked on the gameboard
//     //place your carrier on above

// }



console.log(playerOne)
console.log(playerComp)