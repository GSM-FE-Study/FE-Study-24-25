function solution(number, n, m) {
  let case1 = Boolean(number%n === 0);
  let case2 = Boolean(number%m === 0);
  if(case1 && case2) {
      return 1;
  }
  return 0;
}