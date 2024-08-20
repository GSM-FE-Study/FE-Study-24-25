function solution(str1, str2) {
  var answer = 0;
  answer = str1.includes(str2) ? 1 : 2;
  return answer;
}

/*
  includes() : 지정한 문자열이 있다면 true를 반환하고 없다면 false를 반환한다.
*/