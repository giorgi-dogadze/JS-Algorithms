// Prob: given a staircase of n steps, count the number of distinct ways to climb to the top.
// You either can climb 1 step or 2 steps at a time

// Solve:

const climbingStaircase = (n) => {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  return climbingStaircase(n - 1) + climbingStaircase(n - 2);
};

for (let i = 1; i < 11; i++) {
  console.log(`climbingStaircase(${i})`, climbingStaircase(i));
}
