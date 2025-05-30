import { Ship } from "./ship";

class Gameboard {
    constructor() {
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
                return;
            } else if((column + newShip.length) <= 10) {
                //update board
                let add = 0;
                let thisLength = 0;
                //loop to check if entire space is empty
                for(let i = 0; i < newShip.length; i++) {
                    if(this.board[row][column + add] != null) {
                        return;
                        //move the next line down
                    } 
                    add +=1
                }
                //if entire space is empty, add a ship to the count
                //and loop through and actually add ship object to board
                this.ships ++;
                
                for(let i = 0; i < newShip.length; i++) {
                    this.board[row][column + thisLength] = newShip;
                    thisLength+=1
                }
            } 
        } else if(newShip.direction == "ver") {
            if((row + newShip.length) > 10) {
                return;
            } if((row + newShip.length) <= 10) {
                let add = 0;
                let thisLength = 0;
                for(let i = 0; i < newShip.length; i++) {
                    if (this.board[row + add][column] != null) {
                        // alert("Already a ship there.");
                        return;
                    } 
                    add +=1
                }
                this.ships ++;

                for(let i = 0; i < newShip.length; i++) {
                    this.board[row + thisLength][column] = newShip;
                    thisLength+=1
                }
            }   
        }
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

        if(this.board[row][column] == ("hit" || "miss")) {
          //then computer makes a guess again. ADD THIS  
        }

        if(this.board[row][column] != null) {
            //get ship
            let hitShip = this.getShip(row, column);
            //hit ship
            hitShip.hit();
            this.board[row][column] = "hit"
            //if sunk, remove from board's count
            if(hitShip.isSunk() == true) {
                this.ships -= 1;
            }
        } else {
            this.board[row][column] = "miss"
        }

        //if all sunk, return a win.
        if(this.ships == 0) {
            alert("All ships sunk. You win!");
        }
    }
}

export {Gameboard}