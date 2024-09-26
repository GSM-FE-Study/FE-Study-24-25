function solution(numbers, n) {
  var answer = 0;
  numbers.filter(num => {
      if(answer <= n){
          answer += num;
      }
  })
  return answer;
}