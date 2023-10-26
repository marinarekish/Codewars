/* task */

// solution
function dataReverse(data) {
  let newArr = [];
  let length = data.length;

  for (let i = 0; i < length; i++) {
    newArr.push(...data.splice(-8));
  }

  return newArr;
}
