/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */

// solution
function repeatStr(n, s) {
  let finalStr = "";
  let i = 0;
  while (n > 0) {
    finalStr += s;
    n--;
  }

  return finalStr;
}
