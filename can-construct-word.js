"use strict";

// add whatever parameters you deem necessary & write doc comment

/** creates frequency counter object of each input item */
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

/** compares if there are enough letters input to construct input words  */
function canConstructWord(words, letters) {
  const freqs1 = getFrequencyCounter(words); // O(w)
  const freqs2 = getFrequencyCounter(letters); // O(k)
  debugger

  for (let key in freqs1){ // O(w)
    debugger
    if (!(key in freqs2)){
      debugger
      return false;
    }

    if (freqs1[key] > freqs2[key]){
      return false;
    }
  }

  return true;
}

// TC = O(w + w + k) = O(2w + k)

//use frequency counter
//create two objects, one for each string
//each object has the keys as a letter in the string
//and the value of each key as the frequency of that letter

//go through the key in the WORDS obj,

//and see if each key exists in the LETTERs obj
//if not -> return false

//compare the value of each key in WORDS obj with the corresponding key's value in LETTERS obj
//if value of WORDS obj is bigger --> return false

//exit loop -> return true

//words = abcd
//freqs1 = {a: 1, b: 1, c: 1: d: 1}
//frew


