/* This time no story, no theory. The examples below show you how to write function accumulator:
Examples:

accumulator("abcd") -> "A-Bb-Ccc-Dddd"
accumulator("QweRty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accumulator("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accumulator is a string which includes only letters from a..z and A..Z.
 */

// solution
function accumulator(s) {
  return s
    .split("")
    .map((item, index) => {
      const letters = new Array(index + 1).fill(item.toLowerCase());
      letters[0] = item.toUpperCase();

      return letters.join("");
    })
    .join("-");
}

// or
function accumulator(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
