function solution(numbers) {
  var answer = numbers[0] * numbers[1];
  for(let i of numbers) {
      for(let j of numbers) {
          if(i !== j) answer = answer > i*j ? answer : i*j;
      }
  }
  return answer;
}