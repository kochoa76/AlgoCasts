// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//four for loops inside a while loop that builds out the sides of the matrix , not building out middle number

function matrix(n) {

  let results = []

  for ( let i = 0; i < n ; i++) {
    results.push([])
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n-1;
  let startRow = 0;
  let endRow = n-1;

  while(startColumn <= endColumn && startRow <= endRow) {

    // top row or startRow -- this is what's stagnant , not iterating
    //

    for ( let i = startColumn; i <= endColumn; i++ ) {
      results[startRow][i] = counter;
      counter++
    }
    console.log(results)
    startRow++

    //right column or end column-- this is what's stagnant, not iterating.
    for ( let i = startRow; i <= endRow; i++ ) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--
//bottom row or endRow -- this is what's stagnant, not iterating
    for ( let i =endColumn; i >=startColumn; i--) {
      results[endRow][i] = counter;
      counter++
    }
    endRow--

    //left column or startColumn, this is what's stagnant not iterating
    for ( let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++
    }
    startColumn++

  }
  return results;
}

//notes: the pattern in the four for loops are alternating.
// when you change the counter for startRow++ or endColumn-- , that is what we're starting with for the for loop.

//start the problem with results[startRow][i] and that will set you straight for the rest of the problem. 

module.exports = matrix;
