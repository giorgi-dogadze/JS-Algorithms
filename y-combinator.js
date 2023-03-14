const literallyAnyFunction = () => {
  console.log("f has been called!");
  return "a string";
};

const factorialGenerator = (f) => (n) => n === 0 ? 1 : n * f(n - 1);

console.log(factorialGenerator(literallyAnyFunction)(2));
