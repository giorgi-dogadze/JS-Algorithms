var prompt = require("prompt-sync")();

const isPrime = () => {
  let counter = 0;
  const num = prompt("Input a number ");

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      counter++;
    }
  }

  if (counter == 2) {
    console.log("true");
  } else {
    console.log("false");
  }
};

isPrime();
