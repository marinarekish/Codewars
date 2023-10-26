/*  */

// solution
function maxTriSum(numbers) {
  const triplet = [...new Set(numbers.sort((a, b) => b - a))];
  const triSum = triplet[0] + triplet[1] + triplet[2];
  return triSum;
}
