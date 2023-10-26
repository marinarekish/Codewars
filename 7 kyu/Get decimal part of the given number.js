/*  */

// solution
function getDecimal(n) {
  const decimal = Math.abs(n);
  return decimal - Math.floor(decimal);
}
