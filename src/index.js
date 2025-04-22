import "./styles.css";
import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import {displayHumanBoard, displayComputerBoard, setUpPage} from "./dom";
const shipButton = document.querySelector(".test-button")
window.onload = function() {
    const carrierBtn = document.querySelector(".carrier-btn")
    carrierBtn.addEventListener("click", carrierBtnHandler)
    const battleShipBtn = document.querySelector(".battleship-btn")
    battleShipBtn.addEventListener("click", battleshipBtnHandler)
    const cruiserBtn = document.querySelector(".cruiser-btn")
    cruiserBtn.addEventListener("click", cruiserBtnHandler)
    const submarineBtn = document.querySelector(".submarine-btn")
    submarineBtn.addEventListener("click", submarineBtnHandler)
    const destroyerBtn = document.querySelector(".destroyer-btn")
    destroyerBtn.addEventListener("click", destroyerBtnHandler)
    const newGameBtn = document.querySelector(".new-game-button")
    newGameBtn.addEventListener("click", newGameBtnHandler)
}


let playerOne = new Player("Player")
playerOne.human = true

let playerComp = new Player("Computer")
playerComp.human = false

//initial page setup

setUpPage();
displayHumanBoard(playerOne);

function carrierBtnHandler() {
    alert("carrier")
}

function battleshipBtnHandler() {
    alert("battleship")
}

function cruiserBtnHandler() {
    alert("cruiser")
}

function submarineBtnHandler() {
    alert("submarine")
}

function destroyerBtnHandler() {
    alert("destroyer")
}

function newGameBtnHandler() {
    //if ships!=5, please place all ships
    //if ships==5, play game
    alert("new game")
}


// shipButton.addEventListener("click", () => {
//     let row = 3
//     let column = 3
//     let direction = "ver"
//     let length = 3
//     playerOne.gameboard.addShip(row, column, length, direction)
// })



console.log(playerOne)
console.log(playerComp)