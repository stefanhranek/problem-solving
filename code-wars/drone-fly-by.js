function flyBy(lamps, drone) {
  var str = "";
  for (var i = 0; i < drone.length && i < lamps.length; i++) {
    str += "o";
  }
  for (var j = drone.length; j < lamps.length; j++) {
    str += "x";
  }
  return str;
}
