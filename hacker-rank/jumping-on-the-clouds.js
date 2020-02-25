// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let jumpCounter = 0;
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i + 2] === c.length) {
      jumpCounter++;
      i += 2;
    } else if (c[i + 2] === 0) {
      jumpCounter++;
      i++;
    } else {
      jumpCounter++;
    }
  }
  return jumpCounter;
}

// Solution with console.log()'s
function jumpingOnClouds(c) {
  let jumpCounter = 0;
  for (let i = 0; i < c.length - 1; i++) {
    console.log("start", i);
    if (c[i + 2] === c.length) {
      console.log("jumplast", i);
      jumpCounter++;
      i += 2;
    } else if (c[i + 2] === 0) {
      jumpCounter++;
      i++;
      console.log("doublejump!,", "Jump from:", i, "JumpCount:", jumpCounter);
    } else {
      jumpCounter++;
      console.log("singlejump!,", "Jump from:", i, "JumpCount:", jumpCounter);
    }
  }
  console.log(jumpCounter, "final");
  return jumpCounter;
}
