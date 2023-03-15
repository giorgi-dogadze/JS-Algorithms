// [1,2] X [3,4] => [[1,3],[1,4],[2,3],[3,4]]

const cartesianProduct = (firstArr, secondArr) => {
  const res = [];
  for (let i = 0; i < firstArr.length; i++) {
    for (let k = 0; k < secondArr.length; k++) {
      res.push([firstArr[i], secondArr[k]]);
    }
  }

  return res;
};

const firstArr = [1, 2, 3, 4, 5];
const secondArr = [6, 7, 8, 9, 10];

console.log(cartesianProduct(firstArr, secondArr));
console.log(cartesianProduct(firstArr, secondArr).length);

// Time Complexity -> O(n*m)
