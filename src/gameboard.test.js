import { Gameboard } from "./gameboard";

let testBoard = new Gameboard;
console.log(testBoard.board);
console.log(testBoard.addShip(0, 7, 3, "hor"))
console.log(testBoard.addShip(0, 5, 3, "ver"))
console.log(testBoard.addShip(1, 3, 3, "ver"))

test('receiveAttack works on created Ships.', () => {
    expect(testBoard.receiveAttack(0, 7)).toBe("hit");
  })

  test('receiveAttack works on created Ships.', () => {
    expect(testBoard.receiveAttack(8, 3)).toBe("missed");
  })