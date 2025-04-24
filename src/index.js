import "./styles.css";
import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import {displayHumanBoard, displayComputerBoard} from "./dom";
const shipButton = document.querySelector(".test-button")
const gameTitle = document.querySelector(".new-game")
const boardHumanDisplay = document.querySelector(".player-board")
const boardCompDisplay = document.querySelector(".computer-board")



let playerOne = new Player("Player")
playerOne.human = true

let playerComp = new Player("Computer")
playerComp.human = false

displayHumanBoard(playerOne);

let introShips = 0;
let vertical = true;
gameTitle.textContent = "Place your carrier ship on the game board";

export function setUpShips(choice) {
    //vertical or horizontal decide up heres    
    if(introShips == 0) {
        //ver or hor
        playerOne.gameboard.addShip(choice[0], choice[1], 5, "ver")
        boardHumanDisplay.innerHTML = '';
        displayHumanBoard(playerOne);
        //if a ship got added
        if(playerOne.gameboard.ships == 1) {
            gameTitle.textContent = "Place your battleship"
            introShips ++;
        }
    }
}


// playerOne.gameboard.addShip(1,2,3,"hor")


// function setUpShips(choice) {

    
//     //CHOICE is what you've clicked on the gameboard
//     //place your carrier on above

// }



console.log(playerOne)
console.log(playerComp)