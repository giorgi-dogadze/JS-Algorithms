function binarySearchWithSortedArray(arr, item) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleItem = arr[middleIndex];
    if (middleItem === item) {
      return middleIndex;
    }

    if (item < middleItem) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearchWithSortedArray([2, 4, 5, 7, 9, 15, 25, 30], 30)); // 7
console.log(binarySearchWithSortedArray([2, 4, 5, 7, 9, 15, 25, 30], 21)); // -1
console.log(binarySearchWithSortedArray([2, 4, 5, 7, 9, 15, 25, 30], 7)); // 3
console.log(binarySearchWithSortedArray([2, 4, 5, 7, 9, 15, 25, 30], 9)); // 4

// Big O = O (log n)
