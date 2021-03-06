"use strict";

const countingSort = arr => {
  /*
    Time complexity - O(size+k)
    Space Complexity - O(size+k)
    */
  let max = Math.max(...arr);
  let size = max + 1;
  let countedArray = new Array(size);
  let resultArray = new Array(size - 1);
  //   making an hash implementation of assigning the zeroes to the counted array
  for (let i = 0, n = countedArray.length; i < n; i++) {
    countedArray[i] = 0;
  }
  //   Increment the counter to the array elements
  for (let index = 0, n = arr.length; index < n; index++) {
    countedArray[arr[index]]++;
  }

  //   adding the adjacent elements and storing in its adjacency
  let sum = 0;
  for (let j = 0, n = countedArray.length; j < n; j++) {
    sum += countedArray[j];
    countedArray[j] = sum;
  }
  //   decrementing the count size and assigning it to the result array
  for (let i = 0, n = arr.length; i < n; i++) {
    resultArray[countedArray[arr[i]] - 1] = arr[i];
    countedArray[arr[i]]--;
  }
  return resultArray;
};

const arr = [1, 4, 1, 2, 7, 5, 2];
console.log(countingSort(arr));
