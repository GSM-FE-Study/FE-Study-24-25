function solution(arr, idx) {
  let answer = 0;
  if (idx > 0) {
    arr.splice(0, idx);
  }
  answer = arr.findIndex((e) => e == 1);
  if (answer >= 0) answer += idx;
  return answer;
}
