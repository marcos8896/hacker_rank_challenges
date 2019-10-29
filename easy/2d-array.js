/**
 * Details: https://www.hackerrank.com/challenges/2d-array/problem
 */

function hourglassSum( a, x = 1, y = 1, results = [] ) {
  // Validate stuff, mainly a = []
  const result = sumSection(
    ...a[y - 1].slice( x - 1, x + 2 ),
    a[y][x],
    ...a[y + 1].slice( x - 1, x + 2 )
  );

  results.push( result );

  if ( x === 4 && y === 4 ) {
    let max = -Infinity;
    results.forEach( el => {
      if ( el > max ) max = el;
    });
    return max;
  }

  if ( x === 4 ) {
    x = 1;
    y += 1;
  } else x += 1;

  return hourglassSum( a, x, y, results );
}

function sumSection( ...numbers ) {
  let currentSum = 0;
  for ( let num of numbers ) currentSum += num;
  return currentSum;
}

const matrix = [
  [-9,  -9,  -9,  1,  1,  1 ],
  [ 0,  -9,   0,  4,  3,  2 ],
  [-9,  -9,  -9,  1,  2,  3 ],
  [ 0,   0,   8,  6,  6,  0 ],
  [ 0,   0,   0, -2,  0,  0 ],
  [ 0,   0,   1,  2,  4,  0 ],
];

console.log( hourglassSum( matrix ) );