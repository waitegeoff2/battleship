import { Gameboard } from "./gameboard";
import { Player } from "./player";
const mainArea = document.querySelector(".main-area")
const gameTitle = document.querySelector(".new-game")
const boardHumanDisplay = document.querySelector(".player-board")
const boardCompDisplay = document.querySelector(".computer-board")
const shipButtons = document.querySelector(".ship-buttons")

let testPlayer = new Player("g");

function setUpPage() {
    gameTitle.textContent = "Place Your Ships on the Board"

    // const gameArea = document.createElement("div");
    // gameArea.classList.add("game-area");
    // mainArea.appendChild(gameTitle);

    // const playerBoard = document.createElement("div");
    // playerBoard.classList.add("player-board");
    // gameArea.appendChild(playerBoard);

    const carrierBtn = document.createElement("button");
    carrierBtn.classList.add("ship-btn")
    carrierBtn.textContent = "Place carrier (length: 5)"
    shipButtons.appendChild(carrierBtn);

    const battleshipBtn = document.createElement("button");
    battleshipBtn.classList.add("ship-btn")
    battleshipBtn.textContent = "Place battleship (length: 4)"
    shipButtons.appendChild(battleshipBtn);

    const cruiserBtn = document.createElement("button");
    cruiserBtn.classList.add("ship-btn")
    cruiserBtn.textContent = "Place cruiser (length: 3)"
    shipButtons.appendChild(cruiserBtn);

    const submarineBtn = document.createElement("button");
    submarineBtn.classList.add("ship-btn")
    submarineBtn.textContent = "Place submarine (length: 3)"
    shipButtons.appendChild(submarineBtn);

    const destroyerBtn = document.createElement("button");
    destroyerBtn.classList.add("ship-btn")
    destroyerBtn.textContent = "Place destroyer (length: 2)"
    shipButtons.appendChild(destroyerBtn);

    const newGameBtn = document.createElement("button");
    newGameBtn.classList.add("new-game-button")
    newGameBtn.textContent = "NEW GAME"
    mainArea.appendChild(newGameBtn);
}

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

export {displayHumanBoard, displayComputerBoard, setUpPage}