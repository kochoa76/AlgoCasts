// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Solution 2
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for ( let i= 1; i < str.length; i++) {
//     if (str[i-1] === " "){
//       result += str[i].toUpperCase()
//     } else {
//       result += str[i];
//     }
//   }
//   return result
// }



// Solution 1
function capitalize(string) {

  let newPhrase = []

  for ( let char of string.split(' ')) {
    newPhrase.push(char[0].toUpperCase() + char.slice(1))
  }
  return newPhrase.join(' ')
}

module.exports = capitalize;
