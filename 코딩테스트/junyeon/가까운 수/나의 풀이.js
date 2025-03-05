function solution(array, n) {
  let answer = array[0];
  for (const num of array) {
    if (Math.abs(answer - n) === Math.abs(num - n))
      answer = answer > num ? num : answer;
    else if (Math.abs(answer - n) > Math.abs(num - n)) answer = num;
  }
  return answer;
}
