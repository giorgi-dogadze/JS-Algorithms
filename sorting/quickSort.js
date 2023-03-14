const quickSearch = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivotElement = arr[arr.length - 1];
  let rightArray = [];
  let leftArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= pivotElement) {
      rightArray.push(arr[i]);
    } else {
      leftArray.push(arr[i]);
    }
  }

  return [...quickSearch(leftArray), pivotElement, ...quickSearch(rightArray)];
};

const arr = [1, 5, 72, 4, 73, 212, 41, 14, 6];
console.log(quickSearch(arr));
