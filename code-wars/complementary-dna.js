function DNAStrand(dna) {
  var answer = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      answer += "T";
    } else if (dna[i] === "T") {
      answer += "A";
    } else if (dna[i] === "C") {
      answer += "G";
    } else if (dna[i] === "G") {
      answer += "C";
    }
  }
  return answer;
}

// A - T
// C - G
// for loop
