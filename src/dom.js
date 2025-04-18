import { Gameboard } from "./gameboard";
import { Player } from "./player";
const boardDisplay = document.querySelector(".game-board")

let testPlayer = new Player("g");

function displayBoard(player) {
    let gameboard = player.gameboard.board;

    for(let i=0; i<gameboard.length; i++) {
        
        const row = document.createElement("div");
        row.classList.add("game-row"); 
       
        for(let j=0; j<gameboard[i].length; j++) {
            const column = document.createElement("div");
            column.classList.add("game-column");
            row.appendChild(column);
        }
        boardDisplay.appendChild(row);
    } 
}

displayBoard(testPlayer);

export {displayBoard}