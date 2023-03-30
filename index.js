function hasTargetSum(array, target) {
  // Write your algorithm here
    for (let i = 0; i < array.length ; i++){
    const end = target - array[i];
    for ( let j = i +1 ; j< array.length ; j++){
    if ( array[j] === end ) return true
        }
      }
return false;
  }
/* 
  Write the Big O time complexity of your function here
   Big 0 time complexity is 0(n^2)
*/

/* 
  Add your pseudocode here
  
*/

/*
  Add written explanation of your solution here
  Iterate through the array for two numbers. Returns two numbers that will equal the target number.
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
