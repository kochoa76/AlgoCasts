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

module.exports = maxChar;

//any problem where you are counting the number of characters ------use this technique

//ex ques:
//what is the most common character in the string?
//Does string A have the same characters as string B? (anagram)
//Does the given string have any repeated characters in it?
