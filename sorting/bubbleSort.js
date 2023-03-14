function bubbleSort(arr) {
  let swap = true;

  while (swap === true) {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

const arr = [1, 5, 72, 4, 73, 212, 41, 14, 6];
bubbleSort(arr);
console.log("arr", arr);

// Big O  = O(n^2)
