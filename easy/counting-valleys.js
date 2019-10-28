
/**
 * Details: https://www.hackerrank.com/challenges/counting-valleys/problem
 */
function countingValleys( numberOfSteps, steps ) {
  let levels = 0;
  let valleys = 0;

  if(!validateParams(numberOfSteps, steps))
    return 'Not valid params';

  for(let i = 0; i < numberOfSteps; i++) {

    if(steps[i] === 'D') {
      if (levels === 0) valleys++;
      levels--;
    } else
      levels++;
  }

  return valleys;

}

// Stack overflow when string is too large for obvious reasons.
function countingValleysRecursive(n, s, index = 0, levels = 0, valleys = 0) {
  if (index === n) {
    return valleys;
  }

  if (s[index] === 'D') {
    if (levels === 0) valleys++;
    levels--;
  } else
    levels++;

  index++;

  return countingValleysRecursive(n, s, index, levels, valleys);
}

function validateParams (n, s) {
  
  if (!Number.isInteger(n)) return false;
  if (!(typeof s === 'string')) return false;

  return true;
}

const input = 'UDDDUDUU';
console.log( countingValleys( input.length, input ) );
console.log( countingValleysRecursive( input.length, input ) );
