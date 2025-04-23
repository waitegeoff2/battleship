import "./styles.css";
import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import {displayHumanBoard, displayComputerBoard} from "./dom";
const shipButton = document.querySelector(".test-button")
const gameTitle = document.querySelector(".new-game")


let playerOne = new Player("Player")
playerOne.human = true

let playerComp = new Player("Computer")
playerComp.human = false

// displayHumanBoard(playerOne);

let setupShips = 0;
let vertical = true;
let gameInstructions = "Place your carrier ship on the game board";
gameTitle.textContent = gameInstructions;

function setUpBoard(choice) {    

    if(setupShips = 0) {
        playerOne.gameboard.addShip(choice, 5, "ver")
    }
}


// playerOne.gameboard.addShip(1,2,3,"hor")


// function setUpShips(choice) {

    
//     //CHOICE is what you've clicked on the gameboard
//     //place your carrier on above

// }



console.log(playerOne)
console.log(playerComp)