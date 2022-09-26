var prompt = require("prompt-sync")();

const numbers = [0, 1];
const fibonacci = () => {
  const stringNum = prompt("How many numbers? ");

  if (stringNum == null || parseInt(stringNum) <= 2) {
    throw new Error("invalid number?");
  }

  const num = parseInt(stringNum);

  for (let i = 2; i < num; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }
};

fibonacci();
console.log("numbers", numbers);
