
function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j= i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  for each item in the array we need to add it to the next item in the
  array to see if it matches the target then after exiting the loops
  return false if it doesn't go through in there
*/

/*
  Add written explanation of your solution here
  So I did a nested for loop to grab the first item of the array to 
  add it to the next item in the array and then in an if statement
  compared it to 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
