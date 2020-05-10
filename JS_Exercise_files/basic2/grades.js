let avgMark = function (maths, chem, bio) {
  let avg = (maths + chem + bio) / 3;

  let grade = "";

  if (avg >= 90) {
    grade = "A";
  } else if (avg >= 70) {
    grade = "B";
  } else if (avg >= 60) {
    grade = "C";
  } else if (avg >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  return `Your average mark is ${avg} and your grade is ${grade}.`;
};

let results = avgMark(80, 70, 90);
console.log(results);
