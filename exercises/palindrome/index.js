// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
//

//not the best way of solving it because it compares the first character with mirrored character and once you get to the center
//character you have already checked all the characters, but the interpreter later starts comparing the second half yet again, inefficient.
// function palindrome(str) {
//   return str.split('').every((char, i) => char === str[str.length - i - 1]);
// }

function palindrome(str) {
  let reversed = str.split('').reverse().join('')
  return str === reversed;
}
palindrome('pennep')

// function palindrome(str) {
//   let newStr = str.split('').reduce((a,b) => b + a, '')
//   if (newStr === str){
//     return true
//   } else {
//     return false
//   }
// }



module.exports = palindrome;
