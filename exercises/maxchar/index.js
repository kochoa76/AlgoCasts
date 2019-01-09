// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}
  let max = 0;
  let maxChar = '';

  for (let char of str)
    chars[char] = chars[char] + 1 || 1


  for (let char in chars)
    if(chars[char] > max){
      max = chars[char];
      maxChar = char;
    }

    return maxChar ;

}
maxChar('Hello World!')

// function maxChar(str) {
//   let chars = {}
//
//   for (let char of str) {
//       if(!chars[char]) {
//        chars[char] = 1
//       } else {
//        chars[char]++
//       }
//     }
//     return chars
// }


//Word Sorter
// Given a list of 11 words, we want to find the n-th most occurring word(s).
//
// Example given n=2, we want to find the 2nd most occurring word(s)
//
// In case of ties, return both
// We also want to optimize for reads of n

var words = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'a', 'b', 'c', 'a']

function countWords( arr) {
  let chars = {}
  let charValues;

   for ( let char of arr) {
    chars[char] = chars[char] + 1 || 1;
   }

return chars
}

// chars = { a: 4, b: 3, c: 3, d: 1 }

let wordCounts = countWords(words)
let nthWords = []

function findNth(freq){
  for (const [key, val] of Object.entries(wordCounts)) {
    if (val == freq) {
      nthWords.push(key);
    }
  }
  return nthWords
}

findNth(1); // returns 'd'
findNth(4); // returns 'a'

//other way

var words = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'a', 'b', 'c', 'a']

function countWords( arr) {
  let chars = {}
  let charValues;

   for ( let char of arr) {
    chars[char] = chars[char] + 1 || 1;
   }

return chars
}

// chars = { a: 4, b: 3, c: 3, d: 1 }

let wordCounts = countWords(words)
let nthWords = []

function findNth(freq){
  for ( let char in wordCounts){
    if (wordCounts[char] == freq) {
      nthWords.push(char);
    }
  }
  return nthWords
}


module.exports = maxChar;

//any problem where you are counting the number of characters ------use this technique

//ex ques:
//what is the most common character in the string?
//Does string A have the same characters as string B? (anagram)
//Does the given string have any repeated characters in it?
