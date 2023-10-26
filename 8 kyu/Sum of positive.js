/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

// solution
function positiveSum(arr) {
  const init = 0;

  return arr.reduce((acc, item) => {
    if (item > 0) {
      acc += item;
    }
    return acc;
  }, init);
}
