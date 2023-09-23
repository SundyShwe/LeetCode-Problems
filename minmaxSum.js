function miniMaxSum(arr) {
  // Write your code here
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  let minSum = arr.reduce((sum, num, i) => {
    return i === arr.length - 1 ? sum : sum + num;
  }, 0);
  let maxSum = arr.reduce((sum, num, i) => {
    return i === 0 ? sum : sum + num;
  }, 0);
  console.log(`${minSum} ${maxSum}`);
}

let arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
