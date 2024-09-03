function solution(arr) {
  var answer = [];
  answer = arr.map(item => {
      if(item >= 50 && item % 2 == 0){
          item = Math.floor(item / 2);
      } else if(item <= 50 && item % 2 == 1){
          item *= 2;
      }
      return item;
  })
  return answer;
}