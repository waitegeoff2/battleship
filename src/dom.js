import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";
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
                console.log(choice)
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
                column.classList.add("empty-space")
                row.appendChild(column);
            }

            //record a coordinate here to click later when choosing boats 
            let coord = computerGameboard[i][j]
            //add LISTENERS here for mouseover****
            column.addEventListener('click', () => {
                var coordArray = ([i, j]);
                console.log(coordArray)
                return coordArray;
                //coords for GUESSING
            });
            //append the entire row and loop back to build the next row
            boardCompDisplay.appendChild(row);
            }
        }
    return computerGameboard;
}

displayHumanBoard(testPlayer)

function setUpShips(choice) {
    testPlayer.gameboard.addShip(choice[0], choice[1], 3, "ver")
    boardHumanDisplay.innerHTML = "";
    //remove display board
    //display again
    displayHumanBoard(testPlayer)
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