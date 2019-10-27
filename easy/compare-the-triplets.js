
/**
 * Details: https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */
function compareTripletsRecursive( a, b, results = [0, 0] ) {
  if( a.length === 0 ) return results;

  const currentA = a.shift();
  const currentB = b.shift();
  if( currentA > currentB ) results[0]++;
  else if ( currentA <currentB ) results[1]++;

  return compareTripletsRecursive( a, b, results );

}

console.log( compareTripletsRecursive( [5, 6, 7], [3, 6, 10] ) );
