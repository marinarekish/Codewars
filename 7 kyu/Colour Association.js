/* Color plays an important role in our life. 
Most of us like this color better then another. User experience specialists believe that certain colors have certain psychological meanings for us.

You are given a 2D array, composed of a color and its 'common' association in each array element. 
The function you will write needs to return the color as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...] */

// solution
const colorAssociation = (array) =>
  array.map(([color, association]) => ({
    [color]: association,
  }));
