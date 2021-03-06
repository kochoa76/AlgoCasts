// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// word.replace(/[^\w]/g, "").toLowerCase();  cleans up the word so that it leaves just words nothing else like !!!

//Solution 2
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB)
// }
//
// function cleanString(string) {
//
//   return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join('')
//
// }


//two sum
// sum of ([2, 7, 4], 9) should return [0, 1] or indexes of elements that add up to target
var twoSum = function(nums, target) {
     for ( var i =0; i < nums.length; i++) {
         for ( var j = i+1; j < nums.length; j++) {
             if (nums[j] === target - nums[i]) {
                 return [i, j]
             }
         }
    }
}

// Solution 1
function buildCharMap(string){
  let charMap = {};

  for (let char of string.replace(/[^\w]/g, "").toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
