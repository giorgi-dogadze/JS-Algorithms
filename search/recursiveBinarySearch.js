function recursiveBinarySearchWithSortedArray(arr, item) {
  return search(arr, item, 0, arr.length - 1);
}

const search = (arr, item, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  let middleItem = arr[middleIndex];

  if (middleItem === item) {
    return middleIndex;
  }

  if (item < middleItem) {
    return search(arr, item, leftIndex, middleIndex - 1);
  } else {
    return search(arr, item, middleIndex + 1, rightIndex);
  }
};

console.log(
  recursiveBinarySearchWithSortedArray([2, 4, 5, 7, 9, 15, 25, 30], 30)
); // 7
console.log(
  recursiveBinarySearchWithSortedArray([2, 4, 5, 7, 9, 15, 25, 30], 21)
); // -1
console.log(
  recursiveBinarySearchWithSortedArray([2, 4, 5, 7, 9, 15, 25, 30], 7)
); // 3
console.log(
  recursiveBinarySearchWithSortedArray([2, 4, 5, 7, 9, 15, 25, 30], 9)
); // 4

// Big O = O (log n)
