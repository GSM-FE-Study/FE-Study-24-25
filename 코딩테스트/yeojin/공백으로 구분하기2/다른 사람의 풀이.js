function solution(my_string) {
  return my_string.trim().split(/ +/);
}

/*
  trim() : 문자열 양 끝의 공백을 제거한 후에 반환한다.
  split() : 주어진 구분자를 기준으로 나누어 배열로 반환한다.
  / +/ : 하나 이상의 공백을 의미한다.
*/