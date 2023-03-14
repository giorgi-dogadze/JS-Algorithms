const insertionSort = (arr) => {
  let counter = 0;
  for (let k = 1; k < arr.length; k++) {
    const numberToInsert = arr[k];
    let j = k - 1;
    while (j > 0 && arr[j] > numberToInsert) {
      counter++;
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = numberToInsert;
  }

  console.log("counter", counter);
};

const arr = [1, 5, 72, 4, 73, 212, 41, 14, 6];
insertionSort(arr);
console.log("arr", arr);

// Big O  = O(n^2)
