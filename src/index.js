import "./styles.css";
import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";

let playerOne = new Player("Geoff")
playerOne.human = true

let playerComp = new Player("computer")
playerComp.human = false

console.log(playerOne)
console.log(playerComp)