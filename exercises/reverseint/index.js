// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
// 
// function reverseInt(n) {
//   let num = n.toString().split('').reverse().join('')
//
//   return parseInt(num) * Math.sign(n)
// }


function reverseInt(n) {
  let num = parseInt(n.toString().split('').reverse().join(''))

  if(n < 0){
    return -1 * num
  } else {
    return num
  }
}



reverseInt(51)

module.exports = reverseInt;
