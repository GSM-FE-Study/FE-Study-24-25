function solution(n) {
  var answer = [];
  for(var i = 1; i <= n; i++) {
      if (i % 2 !== 0){
          answer.push(i);
      } 
  }
  return answer;
}

/*
  push() : 요소를 배열의 맨 끝에 추가한다.
*/