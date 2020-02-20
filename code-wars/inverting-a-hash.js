function invertHash(hash) {
  var answer = {};
  Object.keys(hash).forEach(key => {
    answer[hash[key]] = key;
  });
  return answer;
}
