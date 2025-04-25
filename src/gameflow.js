import "./styles.css";
import { Player } from "./player";
import {displayHumanBoard, displayComputerBoard, randomColumn, randomDir, randomRow} from "./dom";
const gameTitle = document.querySelector(".new-game")
const boardHumanDisplay = document.querySelector(".player-board")
const boardCompDisplay = document.querySelector(".computer-board")
const newGameBtn = document.querySelector(".new-game-btn")
const verticalBox = document.querySelector("#vertical")
const horizontalBox = document.querySelector("#horizontal")
const radioSet = document.querySelector(".orientation-btns")

let playerOne = new Player("Player")
playerOne.human = true

let playerComp = new Player("Computer")
playerComp.human = false

//initialize gameboard ships
let introShips = 0;
let introComputerShips = 0;

displayHumanBoard(playerOne);

gameTitle.textContent = "Place your carrier ship on the game board";

export function setUpShips(choice) {
    //something going wrong here
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

export function setUpComputerShips() {
    
while(playerComp.gameboard.ships < 5) {
    if(introComputerShips == 0) {
        playerComp.gameboard.addShip(randomRow(), randomColumn(), 5, randomDir())
        if(playerComp.gameboard.ships == 1) {
            introComputerShips ++;
        }
    } else if(introComputerShips == 1) {
        playerComp.gameboard.addShip(randomRow(), randomColumn(), 4, randomDir())
        if(playerComp.gameboard.ships == 2) {
            introComputerShips ++;
        }
    } else if(introComputerShips == 2) {
        playerComp.gameboard.addShip(randomRow(), randomColumn(), 3, randomDir())
        if(playerComp.gameboard.ships == 3) {
            introComputerShips ++;
        }
    } else if(introComputerShips == 3) {
        playerComp.gameboard.addShip(randomRow(), randomColumn(), 3, randomDir())
        if(playerComp.gameboard.ships == 4) {
            introComputerShips ++;
        }
    } else if(introComputerShips == 4) {
        playerComp.gameboard.addShip(randomRow(), randomColumn(), 2, randomDir())
        if(playerComp.gameboard.ships == 5) {
            introComputerShips ++;
        }
    }
}
}

setUpComputerShips();

newGameBtn.addEventListener("click", () => {

    if(playerOne.gameboard.ships != 5) {
        alert("Place all your ships before starting game.")
    } else {
        gameTitle.textContent = "Make your guesses on the computer's board."
        displayComputerBoard(playerComp)
        newGameBtn.classList.add("hidden")
        radioSet.classList.add("hidden")
    }
})

export function playerMove(selection) {
    let compBoard = playerComp.gameboard;
    let humanBoard = playerOne.gameboard;

    //computer board attacked
    compBoard.receiveAttack(selection[0], selection[1])
    boardCompDisplay.innerHTML = ""
    displayComputerBoard(playerComp)

    //computer makes a move
    humanBoard.receiveAttack(randomRow(), randomColumn())
    boardHumanDisplay.innerHTML = ""
    displayHumanBoard(playerOne)
}

console.log(playerOne)
console.log(playerComp)