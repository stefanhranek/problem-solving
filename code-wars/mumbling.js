function accum(s) {
  let letters = s.toLowerCase().split("");
  console.log(letters);
  for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i);
    console.log(letters[i]);
  }
  return letters.join("-");
}
