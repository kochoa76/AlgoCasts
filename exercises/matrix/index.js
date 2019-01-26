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

  for ( var i =0; i < n; i++){
    results.push([])
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n -1
  let startRow = 0;
  let endRow = n - 1

  while( startColumn <= endColumn && startRow <= endRow) {
    //for the top row
    for ( var i= startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter
      counter++
    }
    startRow++;

    //Right column (last two )
    for ( let i= startRow; i <=endRow; i++) {
      results[i][endColumn] = counter
      counter++
    }
    endColumn--;


    //Bottom row
    for ( let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter
      counter++
    }

    endRow--;

    //for loop for start column
    for ( let i = endRow; i >= startRow; i-- ) {
      results[i][startColumn] = counter
      counter++
    }

    startColumn++

    //all columns and rows both start and finsih should be 1 now so it should be pointing to the center number in the matrix


  }

  return results; 

}

module.exports = matrix;
