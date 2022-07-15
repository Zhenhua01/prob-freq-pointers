"use strict";

// add whatever parameters you deem necessary & write docstring

/** takes two number inputs, compares frequency of each digit,
* returns true/false depending if frequency of digits match*/
function sameFrequency(number1, number2) {

  if (number1.toString().length !== number2.toString().length) return false;

  const freqs1 = getFrequencyCounter(number1.toString()); // O(n)
  const freqs2 = getFrequencyCounter(number2.toString()); // O(m)

  for (let key in freqs1) {

    if (!(key in freqs2) || (freqs1[key] !== freqs2[key]) ) {
      return false;
    }
  }

  return true;
}

/** creates frequency counter object of each input item,  */
// specify return object

function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

// TC: O(n+m)

// input two numbers, split into array, convert to numbers
// check array lenghts, return false if different length
// create objects from each digit or array element
// compare object1 key value with object2 key value
// return false if key values don't match
// return true end of loop