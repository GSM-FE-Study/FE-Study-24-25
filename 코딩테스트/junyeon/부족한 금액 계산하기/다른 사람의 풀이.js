function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }

  return answer > money ? answer - money : 0;
}
