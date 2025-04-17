import { Ship } from "./ship";

class Gameboard {
    constructor() {
        this.carrier = new Ship(5);
        this.battleship = new Ship(4);
        this.cruiser = new Ship(3);
        this.submarine = new Ship(3);
        this.destroyer = new Ship(2);
        this.board = this.createBoard();
    }

    createBoard() {
        let board = []
        for (let i = 0; i < 10; i++) {
            board[i] = [];//create a new array for each row
            for (let j = 0; j < 10; j++) {
              // empty space  
              board[i][j] = null;//fill out each row with 10 columsn
            }
        }
        return board;      
    }

    chooseShip(length, direction) {
        let newShip = new Ship(length, direction)
    }

    //just right or down
    addShip(row, column, length, direction) {
        let newShip = new Ship(length, direction);
        let startCoord = this.board[row][column];

        //is this move valid
        if(newShip.direction == "hor") {
            if((row + newShip.length) > 10) {
                return "invalid move";
            } else if((row + newShip.length) <= 10) {
                //update board
                let add = 0;
                for(let i = 0; i < newShip.length; i++) {
                    this.board[row][column + add] = "occupied";
                    add +=1;
                }
            } 
        } else if(newShip.direction == "ver") {
            if((column+ newShip.length) > 10) {
                return "invalid move";
            } if((row + newShip.length) <= 10) {
                let add = 0;
                for(let i = 0; i < newShip.length; i++) {
                    this.board[row + add][column] = "occupied";
                    add +=1;
                } 
            }   
        }
        //starting point
        //right [i, j + 1][i, j+2]
    }

    placeShip(){
        //create a new ship
        //pick starting poing
        //pick direction
        //see if possible
    }
}

let testBoard = new Gameboard;
console.log(testBoard.board);

let array = [1, 2, 3, 4, 5]
console.log(array[1])

export {Gameboard}