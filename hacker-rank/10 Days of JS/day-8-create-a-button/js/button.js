"use strict";

let myButton = document.getElementById("btn");
let numberDisplay = 0;

myButton.onclick = function() {
  numberDisplay++;
  myButton.innerHTML = numberDisplay;
};
