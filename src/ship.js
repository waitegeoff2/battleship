class Ship {
    constructor(length, direction){
        this.length = length;
        this.hits = 0;
        //direction of ship (hor or ver)
        this.direction = direction;
        //is it sunk?
        this.sunk = false;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        if (this.hits == this.length) {
            this.sunk = true;
            return true;
        } else {
            this.sunk = false;
            return false;
        }
    }
}

export {Ship}