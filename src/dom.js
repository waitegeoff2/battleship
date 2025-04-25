import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";
import { setUpShips } from ".";
import { playerMove } from ".";
const mainArea = document.querySelector(".main-area")
const gameTitle = document.querySelector(".new-game")
const boardHumanDisplay = document.querySelector(".player-board")
const boardCompDisplay = document.querySelector(".computer-board")
const shipButtons = document.querySelector(".ship-buttons")

let testPlayer = new Player("g");

function gamePage() {
    //set up page for playing the game
}

function displayHumanBoard(player) {
    let playerGameboard = player.gameboard.board;

    for(let i=0; i<playerGameboard.length; i++) {
        //create a new row for each array
        const row = document.createElement("div");
        row.classList.add("game-row");

        for(let j=0; j<playerGameboard[i].length; j++) {
            const column = document.createElement("div");
            column.classList.add("game-column");

            if(playerGameboard[i][j] == null) {
                column.classList.add("empty-space")
                row.appendChild(column);
            } else if(playerGameboard[i][j] == "hit") {
                column.classList.add("hit-space")
                row.appendChild(column);
            } else if(playerGameboard[i][j] == "miss") {
                column.classList.add("miss-space")
                row.appendChild(column);
            } else {
                column.classList.add("ship-space")
                row.appendChild(column);
            }

            //record a coordinate here to click later when choosing boats 
            let coord = playerGameboard[i][j]
            //add LISTENERS here for mouseover****
            //grey it when hovering
            column.addEventListener("mouseenter", () => {
                column.classList.add("hover-space");
            })
            column.addEventListener("mouseleave", () => {
                column.classList.remove("hover-space");
            })
            //if click, start the board setup
            column.addEventListener('click', () => {
                var choice = ([i, j]);
                setUpShips(choice);
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
            const column = document.createElement("div");
            column.classList.add("game-column");

            if(computerGameboard[i][j] == null) {
                column.classList.add("empty-space")
                row.appendChild(column);
            } else if(computerGameboard[i][j] == "hit") {
                column.classList.add("hit-space")
                row.appendChild(column);
            } else if(computerGameboard[i][j] == "miss") {
                column.classList.add("miss-space")
                row.appendChild(column);
            } else {
                //to keep it white even with a ship there
                column.classList.add("ship-space")
                row.appendChild(column);
            }

            //record a coordinate here to click later when choosing boats 
            let coord = computerGameboard[i][j]
            //add LISTENERS here for mouseover****
            column.addEventListener("mouseenter", () => {
                column.classList.add("hover-space");
            })
            column.addEventListener("mouseleave", () => {
                column.classList.remove("hover-space");
            })
            column.addEventListener('click', () => {
                var selection = ([i, j]);
                console.log(selection)
                playerMove(selection);
                //coords for GUESSING
            });
            //append the entire row and loop back to build the next row
            boardCompDisplay.appendChild(row);
            }
        }
    return computerGameboard;
}

//!!!!!!!!!!!these just need to UPDATE DOM 
//update SHIPS function
    //run that when you click the button


function humanPlaceShip() {
    //prompts to fill out the addShip(row, column, length, direction) function
}

function randomRow() {
    let min = 0
    let max = 9
    let row = Math.floor(Math.random() * (max - min + 1) + min);
    return row;
}

function randomColumn() {
    let min = 0
    let max = 9
    let column = Math.floor(Math.random() * (max - min + 1) + min);
    return column;
}

function randomDir() {
    let shipMin = 1
    let shipMax = 2
    let shipDir = Math.floor(Math.random() * (shipMax - shipMin + 1) + shipMin);
    if(shipDir == 1) {
        shipDir = "ver"
    } else if(shipDir == 2) {
        shipDir = "hor"
    }

    return shipDir;
}

// function computerPickCoordinates() {
//     let min = 0
//     let max = 9
//     let row = Math.floor(Math.random() * (max - min + 1) + min);
//     let column = Math.floor(Math.random() * (max - min + 1) + min);
//     let shipMin = 1
//     let shipMax = 2
//     let shipDir = Math.floor(Math.random() * (shipMax - shipMin + 1) + shipMin);
//     if(shipDir == 1) {
//         shipDir = "ver"
//     } else if(shipDir == 2) {
//         shipDir = "hor"
//     }



//     console.log(row)
//     console.log(column)
//     console.log(shipDir)
// }

function gameFlow() {

}

export {displayHumanBoard, displayComputerBoard, randomColumn, randomRow, randomDir}