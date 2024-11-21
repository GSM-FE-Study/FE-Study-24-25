function solution(ineq, eq, n, m) {
  var answer = 0;
  if(eq == "=") {
      answer = (ineq == ">" ? n >= m : n <= m) ? 1 : 0;
  } else {
      answer = (ineq == ">" ? n > m : n < m) ? 1 : 0;
  }
  return answer;
}