"use strict";

// add whatever parameters you deem necessary & write docstring

/** */
function averagePair(nums, targetAvg ) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right){
    const avg = 0.5 * (nums[left] + nums[right]);

    if (avg === targetAvg){
      return true;
    } else if (avg < targetAvg){
      left++;
    } else {
      right--;
    }
  }
  return false;
}

// TC: O(n/2) = O(n), n=nums.length

/* take array of numbers and avg target
compare first and last index values with multiple pointers
move pointer based on avg of pair, compared with avg target
return true in loop if avg target is found
return false at the end if avg target not found
 */