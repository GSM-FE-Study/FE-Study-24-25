function solution(s1, s2) {
  var answer = 0
  for(var i = 0; i < s2.length; i++) {
      var check = s1.includes(s2[i]);
      if(check == true) {
          answer++;
      }
  }
  return answer;
}

/*
  includes() : 지정한 요소가 문자열 안에 있다면 true를 반환하는 메소드
*/