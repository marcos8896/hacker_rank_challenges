
/**
 * Iterative
 * Details: https://www.hackerrank.com/challenges/camelcase/problem
 */
function camelcase( s ) {

  let upperCount = 0;
  for( let letter of s )
    if( letter !== letter.toLowerCase() )
      upperCount++;

  return upperCount + 1;
}

function camelcaseRecursive( strArr, upperCount = 0 ) {
  if ( strArr.length === 0 ) return upperCount + 1;

  const letter = strArr.shift();
  if ( letter !== letter.toLowerCase() ) {
    upperCount++;
  }

  return camelcaseRecursive( strArr, upperCount );
}

const input = 'saveChangesInTheEditor';
console.log( camelcase( input ) );
console.log( camelcaseRecursive( input.split( '' ) ) );