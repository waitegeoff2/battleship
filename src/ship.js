class Ship {
    constructor(length){
        length = this.length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        return this.hits +=1;
    }

    isSunk() {
        if (this.hits == this.length) {
            this.isSunk = true;
        }
    }
}

export {Ship}