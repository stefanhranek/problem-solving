function checkMagazine(magazine, note) {
  let answer;
  for (let i = 0; i < note.length; i++) {
    if (magazine.includes(note[i])) {
      let index = magazine.indexOf(note[i]);
      magazine.splice(index, 1);
      answer = true;
    } else {
      answer = false;
      break;
    }
  }
  answer ? (answer = "Yes") : (answer = "No");
  console.log(answer);
}