// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//recursive solution time complexity is exponential with recursive solution, as a result you need to add memoization
//so that you can store the functions that are duplicates and only run the functions run once.


function memoize(fn) {
  // create an object to store the cached or stored solutions so that the engine doesnt have to run the slowFib func for every func
  const cache = {}
  //use ...args (es2015) because you don't know how many functions you will be running, you may want to put more than one arg in in the future

  return function(...args){
    //if you've seen this argument before, and its already stored, just return it
    if (cache[args]){
      return cache[args]
    }
// if you haven't seen it call the fn right away and then store it in cache object
    let result = fn.apply(this, args)
    cache[args] = result;
//return result
    return result

  }
}

function slowFib(n){

  if ( n < 2) {
    return n
  }

  return fib(n-1) + fib(n-2)

}

let fib = memoize(slowFib)

// iterative solution
// function fib(n)  {
//   const result = [ 0, 1 ]
//
//   for ( var i =2; i <= n; i++) {
//     const a = result[i-2]
//     const b = result[i-1]
//
//     result.push(a + b)
//   }
//
//   return result[result.length - 1];
//
// }


 module.exports = fib;
