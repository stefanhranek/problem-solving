function change(string) {
  const lowerCaseString = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((char) => (lowerCaseString.includes(char) ? 1 : 0))
    .join("");
}
