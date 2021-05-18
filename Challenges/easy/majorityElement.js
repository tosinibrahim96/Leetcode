/**
 * Problem statement: https://leetcode.com/problems/majority-element/
 * Key concepts learnt: Brute-force, Memory management
 *
 * ***************************************************************************************
 */

const nums = [3,2,3];
console.log(`Majority element is: `,majorityElement(nums))

/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time complexity: O(n*n)
 * Space complexity = O(1)
 */
 function majorityElement(nums) {

  let majorityElementLowerBound = nums.length/2;

  for (let i = 0; i < nums.length; i++) {
    let currentElementCount = 0;
    for (let j = 0; j < nums.length; j++) {
      if(nums[i] == nums[j]) {
        currentElementCount+=1;
      }
    }
    if (currentElementCount > majorityElementLowerBound) {
      return nums[i];
    }
  }
  return -1;

}



const nums2 = [3,2,3];
console.log(`Majority element 2 is: `,getmajorityElement(nums2))

/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time complexity: O(n)
 * Space complexity = O(1)
 */
function getmajorityElement(nums){

  /**
   * We have a CANDIDATE and COUNT value to keep track of how many times the candidate has
   * appeared.
   * Our first candidate is the first element in the array by default and the initial count =1
   * There's no point checking the current element anymore so we start traversing the array from the next element.
   * We compare the current element with the current candidate.
   * Are they the same? yes. Then increment count by one. If they are not the same, decrement count by one
   * Is the current count == 0? yes. Then change your candidate to the current element and set the value of count to 1;
   */

  let candidate_index = 0;
  let count = 1;

  for (let index = 1; index < nums.length; index++) {

    if (nums[candidate_index] == nums[index]) {
      count += 1;
    }else {
      count -= 1;
    }

    if (count == 0) {
      candidate_index = index;
      count = 1;
    }

  }

  return nums[candidate_index];

}

/**NOTE: There may be cases where no majority element exist. Since our algorithm always returns a value, we need
to confirm if it meets the majority condition.**/

const nums3 = [1,2,3,4,5,6,7];
majorityElement = getmajorityElement(nums3);
if (isMajority(nums3, majorityElement)) {
  console.log(`Majority element is`, majorityElement);
}else{
  console.log(`No Majority element in array ${nums3}`);
}

/**
 * @param {number[]} nums
 * @param {number[]} majorityElement
 * @return {boolean}
 *
 */
function isMajority(nums3, majorityElement){

  let count = 0;
  let majorityElementLowerBound = nums3.length/2;

  for (let index = 0; index < nums3.length; index++) {
    if (nums3[index] == majorityElement) {
      count += 1;
    }
  }

  if (count > majorityElementLowerBound) {
      return true;
  }

  return false;

}