function min(...y) {
  let result = Infinity;
  for (let x of y) {
    if (x < result) result = x;
  }
  return result;
}

console.log(min(45, 7, 0, -3));
