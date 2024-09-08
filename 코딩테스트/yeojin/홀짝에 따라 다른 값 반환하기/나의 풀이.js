function solution(n) {
  var answer = 0;
  if(n % 2 == 1){
      for(let i = n; n > 0; n = n - 2){
          answer += n;
      }
  } else {
      for(let i = n; n > 0; n = n - 2){
          answer += n*n;
      }
  }
  return answer;
}