import { Ship } from "./ship";

class Gameboard {
    constructor() {
        this.carrier = new Ship(5);
        this.battleship = new Ship(4);
        this.cruiser = new Ship(3);
        this.submarine = new Ship(3);
        this.destroyer = new Ship(2);
        //ships currently on board, game is over at 0
        this.ships = 0;
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
        return new Ship(length, direction)
    }

    //create a ship, STORE IT in the game board array, so it
    //can be called later by accessing that part of the board
    addShip(row, column, length, direction) {
        //choose a ship first
        let newShip = this.chooseShip(length, direction);

        //is this move valid
        if(newShip.direction == "hor") {
            if((column + newShip.length) > 10) {
                return "Off the game board.";
            } else if((row + newShip.length) <= 10) {
                //update board
                let add = 0;
                for(let i = 0; i < newShip.length; i++) {
                    //add the SHIP OBJECT in here
                    if(this.board[row][column + add] != null) {
                        return "Already a ship there."
                    } else {
                        this.board[row][column + add] = newShip;
                    }
                    add +=1
                }
            } 
        } else if(newShip.direction == "ver") {
            if((row + newShip.length) > 10) {
                return "Off the game board.";
            } if((row + newShip.length) <= 10) {
                let add = 0;
                for(let i = 0; i < newShip.length; i++) {
                    if (this.board[row + add][column] != null) {
                        return "Already a ship there."
                    } else {
                        this.board[row + add][column] = newShip;
                    }
                    add +=1
                } 
            }   
        }
        this.ships ++;
        return newShip;
        //return a ship here that you can call later
    }

    //takes the coordinates (the GUESS) and checks if space is occupied
    //TEST this one
    getShip(row, column) {
        
    }

    receiveAttack(row, column) {
        if(this.board[row][column] == "occupied") {

        } else {
            this.board[row][column] = "missed"
        }
    }
}

let testBoard = new Gameboard;
console.log(testBoard.board);
console.log(testBoard.addShip(0, 7, 3, "hor"))
console.log(testBoard.addShip(0, 5, 3, "ver"))
console.log(testBoard.addShip(1, 3, 3, "ver"))
console.log(testBoard)

export {Gameboard}