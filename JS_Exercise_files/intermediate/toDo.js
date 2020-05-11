let myToDo = [
  {
    title: "Take a bath",
    isDone: false,
  },
  {
    title: "Make bed",
    isDone: false,
  },
  {
    title: "Make food",
    isDone: true,
  },
  {
    title: "Watch a movie",
    isDone: false,
  },
  {
    title: "Push on github",
    isDone: true,
  },
  {
    title: "Practice coding",
    isDone: true,
  },
];

const thingsNotDone = myToDo.filter((notDone) => notDone.isDone === false);

const thingsDone = myToDo.filter((done) => done.isDone === true);

console.log(thingsNotDone);
console.log(thingsDone);
