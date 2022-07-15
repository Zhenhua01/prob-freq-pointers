"use strict";
// add whatever parameters you deem necessary & write docstring


/** take in an array of keys and an array of values,
 * return an object with key-value pairs created from the two arrays  */
function twoArrayObject(keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++){ //O(n)
    if (values[i] === undefined ){
      obj[keys[i]] = null;
    }
    else {
      obj[keys[i]] = values[i];
    }
  }
  return obj;
}

//TC: O(n) -- n = keys.length



//create an empty object
//loop through the elements in the keys array O(n)
//push into an object: key as element of first array
//value as element at the corresponding index of second array
//if can't find value at the corresponding index, value becomes null
//return obj after loop
