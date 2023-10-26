/*  */

// solution
function combine(...args) {
  return args.reduce((acc, item) => {
    for (let key in item) {
      if (acc[key]) {
        acc[key] += item[key];
      } else {
        acc[key] = item[key];
      }
    }

    return acc;
  }, {});
}
