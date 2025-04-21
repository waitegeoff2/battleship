import { Gameboard } from "./gameboard";
import { Player } from "./player";
const boardHumanDisplay = document.querySelector(".player-board")
const boardCompDisplay = document.querySelector(".computer-board")
const shipButton = document.querySelector(".test-button")

let testPlayer = new Player("g");

function displayHumanBoard(player) {
    let playerGameboard = player.gameboard.board;

    for(let i=0; i<playerGameboard.length; i++) {
        //create a new row for each array
        const row = document.createElement("div");
        row.classList.add("game-row"); 
        for(let j=0; j<playerGameboard[i].length; j++) {
            //append each column to each row
            const column = document.createElement("div");
            column.classList.add("game-column");
            row.appendChild(column);

            //record a coordinate here to click later when choosing boats 
            let coord = playerGameboard[i][j]
            //add LISTENERS here for mouseover****
            column.addEventListener('click', () => {
                column.style.backgroundColor = "grey";
            });
        }
        //append the entire row and loop back to build the next row
        boardHumanDisplay.appendChild(row);
    } 
    return playerGameboard;
}

function displayComputerBoard(player) {
    let computerGameboard = player.gameboard.board;

    for(let i=0; i<computerGameboard.length; i++) {
        //create a new row for each array
        const row = document.createElement("div");
        row.classList.add("game-row"); 
        for(let j=0; j<computerGameboard[i].length; j++) {
            //IF STATEMENT FOR WHAT PIECE LOOKS LIKE
            //null
            //ship is there
            //hit 
            //miss
            const column = document.createElement("div");
            column.classList.add("game-column");
            row.appendChild(column);

            //record a coordinate here to click later when choosing boats 
            let coord = computerGameboard[i][j]
            //add LISTENERS here for mouseover****
            column.addEventListener('click', () => {
                column.style.backgroundColor = "grey";
                let column = coord;
            });
        }
        //append the entire row and loop back to build the next row
        boardCompDisplay.appendChild(row);
    } 
    return computerGameboard;
}

//!!!!!!!!!!!these just need to UPDATE DOM 
//update SHIPS function
    //run that when you click the button


function humanPlaceShip() {
    //prompts to fill out the addShip(row, column, length, direction) function
}

function computerPlaceShip() {

}

function gameFlow() {

}

export {displayHumanBoard, displayComputerBoard}