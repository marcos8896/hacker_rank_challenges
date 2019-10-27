
/**
 * Recursive
 * Details: https://www.hackerrank.com/challenges/diagonal-difference/problem
 */

const input = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

function diagonalDifference( input ) {
  const firstDiagonal = leftToRightDiagonalSum( input, 0, 0, 0 );
  const secondDiagonal = rightToLeftDiagonalSum( input, 0, input.length - 1 );
  return Math.abs( firstDiagonal - secondDiagonal );
}

function leftToRightDiagonalSum( arr, mainIndex = 0, diagonalIndex = 0 ) {
  if( mainIndex === arr.length ) {
    return 0;
  }

  const current = arr[mainIndex][diagonalIndex];
  mainIndex++;
  diagonalIndex++;

  return current + leftToRightDiagonalSum( arr, mainIndex, diagonalIndex );
}

function rightToLeftDiagonalSum( arr, mainIndex = 0, diagonalIndex = 0 ) {
  if( diagonalIndex === -1 ) {
    return 0;
  }

  const current = arr[mainIndex][diagonalIndex];
  mainIndex++;
  diagonalIndex--;

  return current + rightToLeftDiagonalSum( arr, mainIndex, diagonalIndex );
}

console.log( diagonalDifference( input ) );