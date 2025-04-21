import "./styles.css";
import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import {displayHumanBoard, displayComputerBoard} from "./dom";

let playerOne = new Player("Player")
playerOne.human = true

let playerComp = new Player("Computer")
playerComp.human = false

displayHumanBoard(playerOne);
displayComputerBoard(playerComp);



console.log(playerOne)
console.log(playerComp)