/*  */

// solution
function findMissing(arr1, arr2) {
  let length = arr1.length;
  let num = 0;

  for (let i = 0; i < length; i++) num = num ^ arr1[i];

  for (let i = 0; i < length - 1; i++) num = num ^ arr2[i];

  return num;
}
