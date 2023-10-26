/* The first three stages of a sequence are shown.

blocks url = https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVw-YEuGbD31EB47C7PSi_RpBxr5EJSydV9dj5lOmzsDWFsoAs

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ? */

// solution
function perimeterSequence(a, n) {
  return a * n * 4;
}
