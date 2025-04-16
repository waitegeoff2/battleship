import { Ship } from "./ship";

//playing around with NPM test to ensure it works
let hitShip = new Ship(3);
hitShip.hits = 3;
console.log(hitShip)

//won't work anymore since I changed to this.sunk, but you get the idea
// test('isSunk works when hits = length of ship.', () => {
//     expect(hitShip.isSunk()).toBe("true");
//   })