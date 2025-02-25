function solution(score) {
  let sum = score.map((arr) => arr.reduce((cur, pre) => cur + pre, 0) / 2); // 평균
  let result = [...sum].sort((a, b) => b - a); // 정렬
  return sum.map((v) => result.indexOf(v) + 1); // sum 값 index 번호에 1 더해서 순위 return
}
