let arrWithDuplicates = [1,2,3,4,2];
let arrWithoutDuplicates = [1,2,3,4,5];

console.log(`Duplicate exist: `, duplicateExist1(arrWithDuplicates));
console.log(`Duplicate exist: `, duplicateExist1(arrWithoutDuplicates));


/**
 * How does this function work ?
 * We create an outer loop that goes through the entire array once
 * Then an inner loop that compares the current element of the outer loop with all the elements in the array
 * We set the currentElementcount to zero because we know we'll encounter it at least once in the inner loop
 * After comparing the current element in the outer loop with all inner loop values, we check if the value of
 * currentElementCount is greater than 1(if we encountered it more than once during our iteration and comparison)
 * If yes, we return true which automatically stops the function execution
 * If no, then go to the next element in the outer iteration.
 * continue the process until we have checked all elements without returning true, then return false
 *
 * ***************************************************************************************
 */


/**
 * @param {array[]} arrWithDuplicates
 * @return {boolean}
 *
 * Time complexity = O(n*n)
 * Space complexity = O(1)
 */
function duplicateExist(arrWithDuplicates) {
  for (let index = 0; index < arrWithDuplicates.length; index++) {
    let currentElementcount = 0;
    for (let j = 0; j < arrWithDuplicates.length; j++) {
      if (arrWithDuplicates[index] == arrWithDuplicates[j]) {
        currentElementcount+=1;
      }
    }
    if (currentElementcount > 1) {
      return true;
    }
  }

  return false;
}


/**
 * How does this function work ?
 * We create a single loop to go through the array once but create another array to keep track of
 * values that we have encountered. How? Since we don't need to define the size of the array ahead of time,
 * We store a value in the new array at any index, but in this implementation, the index will be based on the current value
 * in our array, e.g if the current value in our loop is 3, then we save a boolean value(true) at index 3 of the new array
 * Before saving though, we need to check if there's a value in that index
 * If yes, then we have encountered that value before so a duplicate exist and we return true
 * If no, save the boolean value (true) in the new array using the current value in the iteration as index
 *
 * ***************************************************************************************
 */


/**
 * @param {array[]} arrWithDuplicates
 * @return {boolean}
 *
 * Time complexity = O(n)
 * Space complexity = O(n)
 */
 function duplicateExist1(arrWithDuplicates) {

  let duplicates = [];
  for (let index = 0; index < arrWithDuplicates.length; index++) {
    if(duplicates[arrWithDuplicates[index]]){
      return true;
    }else{
      duplicates[arrWithDuplicates[index]] = true;
    }
  }
  
  return false;
}
