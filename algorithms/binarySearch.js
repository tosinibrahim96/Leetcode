/**
 * How does binary search work ?
 *  Binary search is an algorithm that can be used to search for a value in an array.
 *  It's important to not however that it can only work on an ordered array.
 *  The idea is to understand a few steps
 * 1. Decide the beginning and end of your array
 * 2. When searching for the value, divide your array into two and pick the middle element
 * 3. If the element is greater, eliminate the left half (your start and end index will change)
 *    - end index remains the same
 *    - start index will be the index of the value you picked(the middle value)
 * 4. If the element is lower, eliminate the right half (your start and end index will change too)
 *    - start index remains the same
 *    - end index will be the index of the value you picked(the middle value)
 * 5. Keep repeating the process until the start index becomes greater than the end index (This means we've searched through
 *    the entire list)
 *
 * ***************************************************************************************
 */


 const arr = [2,3,4,5,6,7,8,9,10]
 const searchValue = 10;

 console.log('Index of search value: ',binarySearch(arr, searchValue));

/**
 * @param {array} arr
 * @param {number} searchValue
 * @return {number}
 */
function binarySearch(arr, searchValue){

	let firstIndex = 0;
	let lastIndex = arr.length -1;
	let midpoint = getMidpoint(firstIndex, lastIndex);

  let recursionIndex = binarySearchRecursion(arr, searchValue, firstIndex, lastIndex, midpoint);
  let iterationIndex = binarySearchIteration(arr, searchValue, firstIndex, lastIndex, midpoint);

	return iterationIndex;
}


/** Binary search implementation using recursion
 *
 * @param {array} arr
 * @param {number} searchValue
 * @param {number} firstIndex
 * @param {number} lastIndex
 * @param {number} midpoint
 * @return {number}
 */
function binarySearchRecursion(arr, searchValue, firstIndex, lastIndex, midpoint){

  if (firstIndex > lastIndex) {
   return -1;
  }

  if(arr[midpoint] == searchValue ){
    return midpoint;
  }

  if(searchValue < arr[midpoint]){
    lastIndex = midpoint-1;
  }

  if(searchValue > arr[midpoint]){
    firstIndex = midpoint+1;
  }

  midpoint = getMidpoint(firstIndex, lastIndex);
  return binarySearchRecursion(arr,searchValue,firstIndex,lastIndex,midpoint);
}



/** Binary search implementation using iteration
 *
 * @param {array} arr
 * @param {number} searchValue
 * @param {number} firstIndex
 * @param {number} lastIndex
 * @param {number} midpoint
 * @return {number}
 */
function binarySearchIteration(arr, searchValue, firstIndex, lastIndex, midpoint){

  while (firstIndex <= lastIndex){

    if(arr[midpoint] == searchValue ){
      return midpoint;
    }

    if(searchValue < arr[midpoint]){
      lastIndex = midpoint-1;
    }

    if(searchValue > arr[midpoint]){
      firstIndex = midpoint+1;
    }

    midpoint = getMidpoint(firstIndex, lastIndex);
	}

  return -1;
}



/**
 * @param {number} firstIndex
 * @param {number} lastIndex
 * @return {number}
 */
function getMidpoint(firstIndex, lastIndex){
  return  Math.floor((firstIndex + lastIndex)/2);
}