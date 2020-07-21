function power(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 10));

function square(x) {
  return x * x;
}
console.log(square(4));

const square2 = (x) => x * x;
console.log(square2(3));

const bell = () => "Tooooot";
console.log(bell());

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

function mini(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
console.log(mini(10, 18));
