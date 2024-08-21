function solution(array, n) {
  let answer = 0;
  let Array = array.filter((item) => item === n);
  answer = Array.length;

  return answer;
}
