/**
 * Problem statement: https://leetcode.com/problems/reverse-string/
 * Key concepts learnt: Recursion, Memory management
 *
 * ***************************************************************************************
 */

/****METHOD ONE (RECURSION)*****/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  let left = 0;
  let right = s.length-1;

  reverseArrayHelper(s, left, right);
  reverseArrayHelper2(s, left, right);
};

/**
 * @param  {array} arr
 * @param  {integer} left
 * @param  {integer} right
 * @return {array} arr
 */

function reverseArrayHelper(arr, left, right){

  if (right <= left) {
    return arr;
  }

  //swap
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  //move left one step forward, move right one step back, then call function again
  reverseArrayHelper(arr, left+1, right-1);

}


/****METHOD TWO (WHILE LOOP)*****/
/**
 * @param  {array} arr
 * @param  {integer} left
 * @param  {integer} right
 * @return {array} arr
 */

function reverseArrayHelper2(arr, left, right){

  while (left < right) {
   let temp = arr[left];
   arr[left] = arr[right];
   arr[right] = temp;
   left +=1;
   right -=1;
  }
}
