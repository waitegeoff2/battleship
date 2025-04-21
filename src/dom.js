import { Gameboard } from "./gameboard";
import { Player } from "./player";
const boardHumanDisplay = document.querySelector(".player-board")
const boardCompDisplay = document.querySelector(".computer-board")

let testPlayer = new Player("g");

function displayHumanBoard(player) {
    let gameboard = player.gameboard.board;

    for(let i=0; i<gameboard.length; i++) {
        //create a new row for each array
        const row = document.createElement("div");
        row.classList.add("game-row"); 
        for(let j=0; j<gameboard[i].length; j++) {
            //append each column to each row
            const column = document.createElement("div");
            column.classList.add("game-column");
            row.appendChild(column);

            //record a coordinate here to click later when choosing boats 
            let coord = gameboard[i][j]
            //add LISTENERS here for mouseover****
            column.addEventListener('click', () => {
                column.style.backgroundColor = "grey";
            });
        }
        //append the entire row and loop back to build the next row
        boardHumanDisplay.appendChild(row);
    } 
    return gameboard;
}

function displayComputerBoard(player) {
    let gameboard = player.gameboard.board;

    for(let i=0; i<gameboard.length; i++) {
        //create a new row for each array
        const row = document.createElement("div");
        row.classList.add("game-row"); 
        for(let j=0; j<gameboard[i].length; j++) {
            //append each column to each row
            const column = document.createElement("div");
            column.classList.add("game-column");
            row.appendChild(column);

            //record a coordinate here to click later when choosing boats 
            let coord = gameboard[i][j]
            //add LISTENERS here for mouseover****
            column.addEventListener('click', () => {
                column.style.backgroundColor = "grey";
            });
        }
        //append the entire row and loop back to build the next row
        boardCompDisplay.appendChild(row);
    } 
    return gameboard;
}

//EVENT LISTENERS TO PLACE SHIPS
//FIGURE OUT THE PAGE LAYOUT FIRST
//button that says "place destroyer" fills out the addShip(row, column, length, direction) function

function humanPlaceShip() {
    //prompts to fill out the addShip(row, column, length, direction) function
}

function computerPlaceShip() {

}

function gameFlow() {

}

export {displayHumanBoard, displayComputerBoard}