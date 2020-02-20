class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallestNumber = args[0];
    for (var i = 0; i < args.length; i++) {
      if (args[i] < smallestNumber) {
        smallestNumber = args[i];
      }
    }
    return smallestNumber;
  }
}
