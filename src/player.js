import { Gameboard } from "./gameboard";

class Player {
    constructor(name) {
        this.gameboard = new Gameboard();
        this.name = name;
        this.human = true;
    }
}

export {Player};