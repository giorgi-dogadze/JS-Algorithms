// Divide the array into sub arrays, each containing only one element
// (An Array with one element is considered sorted)
// Repeatedly merge sub arrays to produce new sorted sub arrays
// until there is only one sub array remaining.
// That will be sorted array

const mergeSort = (arr) => {
  console.log("arr", arr);
  if (arr.length < 2) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  console.log("merge leftArray:", leftArray, "rightArray", rightArray);
  const sortedArr = [];
  while (leftArray.length && rightArray.length) {
    //while they aren't empty
    if (leftArray[0] <= rightArray[0]) {
      sortedArr.push(leftArray.shift());
    } else {
      sortedArr.push(rightArray.shift());
    }
  }
  return [...sortedArr, ...leftArray, ...rightArray];
};

const arr = [1, 5, 72, 4, 73, 212, 41, 14, 6];
console.log(mergeSort(arr));

// Time Complexity -> O(nLogn)
