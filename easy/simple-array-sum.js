
/**
 * Given an array of integers, find the sum of its elements.
 * Details: https://www.hackerrank.com/challenges/simple-array-sum/problem
 */
function simpleArraySumRecursive( ar ) {

  if ( ar.length === 1 ) return ar[0];

  const element = ar.shift();
  return element + simpleArraySumRecursive( ar );

}

function simpleArraySumIterative( ar ) {
  let sum = 0;

  for ( let i = 0; i < ar.length; i++ )
    sum+= ar[i];

  return sum;
}

console.log( simpleArraySumRecursive( [1, 2, 3, 5] ) );
console.log( simpleArraySumIterative( [1, 2, 3, 5] ) );