function solution(n, k) {
  var answer = 0;
  k -= Math.floor(n/10);
  answer = 12000 * n + 2000 * k;
  return answer;
}

/*
  Math.floor() : 인수보다 작거나 같은 수 중에서 가장 큰 정수를 반환
*/