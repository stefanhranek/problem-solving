function rotLeft(a, d) {
  let newArr = [];
  for (let i = d; i < a.length; i++) {
    newArr.push(a[i]);
  }
  newArr.push(a.slice(0, d));
  let merged = [].concat.apply([], newArr);
  return merged;
}
