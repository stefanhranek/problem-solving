// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let fallenOranges = [];
  let fallenApples = [];
  let houseApples = [];
  let houseOranges = [];
  
  apples.forEach(apple => fallenApples.push(apple + a));
  oranges.forEach(orange => fallenOranges.push(orange + b));

  for (let i = 0; i < fallenApples.length; i++) {
    if (fallenApples[i] >= s && fallenApples[i] <= t) {
      houseApples.push(fallenApples[i]);
    }
  }

  for (let i = 0; i < fallenOranges.length; i++) {
    if (fallenOranges[i] >= s && fallenOranges[i] <= t) {
      houseOranges.push(fallenOranges[i]);
    }
  }

  console.log(houseApples.length);
  console.log(houseOranges.length);
}
