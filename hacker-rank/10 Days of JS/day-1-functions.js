const factorial = n => {
  let countdown = n - 1;
  let answer = n;
  while (countdown) {
    answer *= countdown;
    countdown--;
  }
  return answer;
};
