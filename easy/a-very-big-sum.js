/**
 * Details: https://www.hackerrank.com/challenges/a-very-big-sum/problem
 */
function aVeryBigSum( ar ) {
  if ( ar.length === 1 )
    return ar[0];

  const currentNum = ar.shift();
  return currentNum + aVeryBigSum( ar );

}

// eslint-disable-next-line max-len
const aVeryBigSumLessLines = ar => ar.length === 1 ? ar[0] : ar.shift() + aVeryBigSumLessLines( ar );

const input1 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const input2 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log( aVeryBigSum( input1 ) );
console.log( aVeryBigSumLessLines( input2 ) );