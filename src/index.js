import "./styles.css";
import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import {displayHumanBoard, displayComputerBoard, setUpPage} from "./dom";
const shipButton = document.querySelector(".test-button")


let playerOne = new Player("Player")
playerOne.human = true

let playerComp = new Player("Computer")
playerComp.human = false

setUpPage();

playerOne.gameboard.addShip(1, 2, 3, "hor");

playerOne.gameboard.receiveAttack(4,2);

displayHumanBoard(playerOne);


// shipButton.addEventListener("click", () => {
//     let row = 3
//     let column = 3
//     let direction = "ver"
//     let length = 3
//     playerOne.gameboard.addShip(row, column, length, direction)
// })



console.log(playerOne)
console.log(playerComp)