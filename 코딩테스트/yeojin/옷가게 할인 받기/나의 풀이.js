function solution(price) {
  var answer = 0;
  let discount = 0;
  
  if (price >= 100000) {
      discount = 5;
  }
  if (price >= 300000) {
      discount = 10;
  }
  if (price >= 500000) {
      discount = 20;
  }
  
  answer = Math.floor(price * (100 - discount) / 100);
  return answer;
}