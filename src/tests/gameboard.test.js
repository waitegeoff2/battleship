import { Gameboard } from "../gameboard";

let testBoard = new Gameboard;
testBoard.addShip(0, 7, 3, "hor")
testBoard.addShip(0, 5, 3, "ver")
testBoard.addShip(1, 3, 3, "ver")
testBoard.receiveAttack(1,3)
testBoard.receiveAttack(1,4)
testBoard.receiveAttack(2,3)

// test('receiveAttack works on created Ships.', () => {
//     expect(testBoard.receiveAttack(0, 7)).toBe("hit");
//   })

// test('receiveAttack works on created Ships.', () => {
//     expect(testBoard.receiveAttack(8, 3)).toBe("missed");
// })

test('receiveAttack works on created Ships.', () => {
    expect(testBoard.receiveAttack(3, 3)).toBe("ship sunk");
})



