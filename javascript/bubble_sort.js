function bubbleSort(arr) {
  if (arr.length === 0) {
    return arr;
  } else {
    for (i = 0; i < arr.length; i++) {
      let j = 0;
      while (j < arr.length) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        j++;
      }
    }
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// 1. Use for loop to iterate over Array.
// 2. If value of arr[i + 1] < arr[i], use destructuring: [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]].
// 3. If array is empty, return empty array.
// 4. Once done iterating, return arr.
// And a written explanation of your solution
