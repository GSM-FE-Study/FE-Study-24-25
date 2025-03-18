function solution(my_string, n) {
  var answer = "";
  const arr = Array.from(my_string);
  arr.forEach((str) => (answer += str.repeat(n)));

  return answer;
}

/*
  Array.from : 인수가 문자열인 경우 문자열을 배열로 만들어주는 정적 메소드
  repeat() : 문자열을 반복해주는 메소드
*/
