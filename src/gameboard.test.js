import { Gameboard } from "./gameboard";

let testBoard = new Gameboard();

test('addShip works to create occupied spaces on board.', () => {
    expect(testBoard.addShip()).toBe("true");
  })