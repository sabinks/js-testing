/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
function maxSubArray(arr, num) {
  // if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (var i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (var i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArray([4, 4, 4], 2));
