/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

// solution

function findAverage(array) {
  let result = array.reduce((sum, current) => sum + current, 0);

  if (result === 0) {
    return 0;
  }

  let averageNumber = result / array.length;

  return averageNumber;
}
