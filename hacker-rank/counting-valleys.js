function countingValleys(n, s) {
  let currentLevel = 0;
  let valleyCounter = 0;

  for (let i = 0; i < s.length; i++) {
    if (currentLevel === -1 && s[i] === "U") {
      currentLevel += 1;
      valleyCounter += 1;
    } else if (s[i] === "U") {
      currentLevel += 1;
    } else {
      currentLevel -= 1;
    }
  }
  return valleyCounter;
}
