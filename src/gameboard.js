import { Ship } from "./ship";

class Gameboard {
    constructor() {
        this.rows = 10;
        this.columns = 10;
        this.board = [];
    }

    createBoard() {
        for (let i = 0; i < this.rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.columns; j++) {
              this.board[i].push(Cell());
              //push ([i, j])
            }
        }
          
    }

    placeShip(){
        //create a new ship
        //pick starting poing
        //pick direction
        //see if possible
    }
}

let testBoard = new Gameboard;
console.log(testBoard.createBoard());

export {Gameboard}