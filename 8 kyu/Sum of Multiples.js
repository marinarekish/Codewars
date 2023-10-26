/*  Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples
 */

// solution

function sumMul(n, m) {
  let sum = 0;
  let summand = n;

  if (n >= m) {
    return "INVALID";
  }

  while (summand < m) {
    sum += summand;
    summand += n;
  }

  return sum;
}
