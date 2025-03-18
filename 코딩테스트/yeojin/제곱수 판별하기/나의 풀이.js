function solution(n) {
  var answer = 0;
  const number = Math.sqrt(n);
  const check = Math.trunc(number);
  answer = ((number === check) ? 1 : 2);
  return answer;
}

/*
  Math.sqrt() : 인수의 제곱근을 반환함
  Math.trunc() : 인수의 정수 부분을 반환함
*/