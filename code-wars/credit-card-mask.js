function maskify(cc) {
  var maskedString = "";
  for (var i = 0; i < cc.length - 4; i++) {
    maskedString += "#";
  }

  for (var j = 4; j >= 1; j--) {
    var lastCharacter = cc.charAt(cc.length - j);
    var lastNums = lastCharacter;
    maskedString += lastNums;
  }

  return maskedString;
}
