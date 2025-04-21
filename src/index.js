import "./styles.css";
import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import {displayHumanBoard, displayComputerBoard} from "./dom";
const shipButton = document.querySelector(".test-button")


let playerOne = new Player("Player")
playerOne.human = true

let playerComp = new Player("Computer")
playerComp.human = false

displayHumanBoard(playerOne);
displayComputerBoard(playerComp);

shipButton.addEventListener("click", () => {
    let row = 3
    let column = 3
    let direction = "ver"
    let length = 3
    playerOne.gameboard.addShip(row, column, length, direction)
})



console.log(playerOne)
console.log(playerComp)