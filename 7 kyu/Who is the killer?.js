/*  */

// solution
function killer(suspectInfo, dead) {
  for (let [name, list] of Object.entries(suspectInfo)) {
    if (list.includes(...dead)) {
      return name;
    }
  }
}
