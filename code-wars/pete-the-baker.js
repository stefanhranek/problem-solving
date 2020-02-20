function cakes(recipe, available) {
  var answer = [];
  for (var key in recipe) {
    if (key in available) {
      answer.push(Math.floor(available[key] / recipe[key]));
    } else {
      return 0;
    }
  }
  return Math.min(...answer);
}

// for..in to loop through the properties of recipe object
// if (in) .. the key appears in both recipe object & available object...
// divide matching keys: available/recipe
// round down (Math.floor)
// push results into an array
// return the lowest number answer in array (Math.min(...array))
// else .. (key appears in recipe, but not available)
// return 0
