function solution(n) {
  var answer = 0;
  const numbers = [];
  for (let i = 0; n > 0; i++) {
      numbers[i] = n;
      n--;
  }
  
  const evenNumbers = numbers.filter(n => n % 2 === 0);
  
  for (let i = 0; i < evenNumbers.length; i++) {
      answer += evenNumbers[i];
  }
  return answer;
}