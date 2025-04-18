import { Gameboard } from "./gameboard";
import { Player } from "./player";
const boardDisplay = document.querySelector(".game-board")

let testPlayer = new Player("g");

function displayBoard(player) {
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
        boardDisplay.appendChild(row);
    } 
    return gameboard;
}

displayBoard(testPlayer);

export {displayBoard}