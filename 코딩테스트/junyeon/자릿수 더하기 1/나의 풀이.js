function solution(n) {
  let answer = 0;
  const str = String(n).split("");
  for (let i = 0; i < str.length; i++) answer += parseInt(str[i]);
  return answer;
}
