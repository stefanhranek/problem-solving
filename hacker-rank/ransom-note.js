function checkMagazine(magazine, note) {
  // console.log(magazine, note)
  let answer;
  let noteCopy = [];
  for (let i = 0; i < note.length; i++) {
    for (let j = 0; j < magazine.length; j++) {
      if (note[i] === magazine[j]) {
        noteCopy.push(magazine.splice(j, 1));
        j--;
        // console.log(noteCopy)
        // console.log(note)
        // console.log(magazine)
      }
    }
  }
  noteCopy = [].concat.apply([], noteCopy);
  // console.log(noteCopy, note)
  noteCopy === note ? (answer = "Yes") : (answer = "No");
  console.log(answer);
}

// As of now, 10/22 test cases failed
//  there is an issue where checking two objects with the same values is returning false
