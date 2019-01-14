// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Solution 1 
function capitalize(str) {
  let phrase = str.split(' ')
  let newPhrase = []

  for (var i =0; i < phrase.length; i++) {
    newPhrase.push(phrase[i][0].toUpperCase() + phrase[i].slice(1));
  }

  return newPhrase.join(' ')
}

module.exports = capitalize;
