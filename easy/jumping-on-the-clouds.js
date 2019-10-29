
/**
 * Details: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 */

function jumpingOnClouds(c, jumps = 0, index = 0) {
  if (index + 1 >= c.length) return jumps;
  if(c[index + 2] === 0) index += 2;
  else index += 1;
  jumps += 1;
  return jumpingOnClouds(c, jumps, index);
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));