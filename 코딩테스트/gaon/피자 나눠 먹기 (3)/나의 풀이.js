function solution(slice, n) {
  let answer = 1;

  while (Math.floor((answer * slice) / n) < 1) {
    answer++;
  }

  return answer;
}
