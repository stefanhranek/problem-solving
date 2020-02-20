// Method 1
const staircase = n => {
  const line = Array(n).fill(" ");
  //line[n] = '';
  for (let i = n - 1; i >= 0; i--) {
    line[i] = "#";
    console.log(line.join(""));
  }
};

// Method 2
function staircase(n) {
  if (n > 0 && n <= 100 && typeof n === "number" && n === parseInt(n, 0)) {
    for (let k = 1; k <= n; k++) {
      let blanks = [...Array(n - k)].map(i => " ");
      let hashes = [...Array(n - (n - k))].map(i => "#");
      console.log([...blanks, ...hashes].join(""));
    }
  }
}
