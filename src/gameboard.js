import { Ship } from "./ship";

class Gameboard {
    constructor() {
        // this.carrier = new Ship(5);
        // this.battleship = new Ship(4);
        // this.cruiser = new Ship(3);
        // this.submarine = new Ship(3);
        // this.destroyer = new Ship(2);
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

    addShip(row, column, length, direction) {
        //choose a ship first
        let newShip = this.chooseShip(length, direction);

        //is this move valid
        if(newShip.direction == "hor") {
            if((column + newShip.length) > 10) {
                alert("Off the game board.");
                return;
            } else if((row + newShip.length) <= 10) {
                //update board
                let add = 0;
                for(let i = 0; i < newShip.length; i++) {
                    //add the SHIP OBJECT in here
                    if(this.board[row][column + add] != null) {
                        alert("Already a ship there.")
                        return;
                    } else {
                        this.board[row][column + add] = newShip;
                    }
                    add +=1
                }
            } 
        } else if(newShip.direction == "ver") {
            if((row + newShip.length) > 10) {
                alert("Off the game board.");
                return;
            } if((row + newShip.length) <= 10) {
                let add = 0;
                for(let i = 0; i < newShip.length; i++) {
                    if (this.board[row + add][column] != null) {
                        alert("Already a ship there.");
                        return;
                    } else {
                        this.board[row + add][column] = newShip;
                    }
                    add +=1
                } 
            }   
        }
        this.ships ++;
        return newShip;
    }

    previewShip(row, column, length, direction) {
        //same as addship but without boundaries
        //update the CSS to show greyed out tiles
        //update to remove it on mouseleave
    }

    //use this to check the gameboard to see if there's a ship there
    //and return it so you can update it
    getShip(row, column) {
        return this.board[row][column];
    }

    receiveAttack(row, column) {
        if((row > 9) || (column > 9)) {
            alert ("This is off the game board")
            return;
        }

        if(this.board[row][column] != null) {
            //get ship
            let hitShip = this.getShip(row, column);
            //hit ship
            hitShip.hit();
            //MARK BOARD WITH A HIT
            this.board[row][column] = "hit"
            //if sunk, remove from board's count
            if(hitShip.isSunk() == true) {
                this.ships -= 1;
            }
        } else {
            //update board to show miss
            this.board[row][column] = "miss"
        }

        //if all sunk, return a win.
        if(this.ships == 0) {
            alert("All ships sunk. You win!");
        }
    }
}

let testBoard = new Gameboard;
console.log(testBoard.addShip(0, 7, 3, "hor"))
console.log(testBoard.addShip(0, 5, 3, "ver"))
console.log(testBoard.addShip(1, 3, 3, "ver"))
console.log(testBoard.receiveAttack(1,3))
console.log(testBoard.receiveAttack(1,4))
console.log(testBoard.receiveAttack(2,3))
console.log(testBoard.receiveAttack(3,3))
console.log(testBoard);


export {Gameboard}