function solution(s1, s2) {
  let answer = 0;
  for (let arr of s1) if (s2.includes(arr)) answer++;
  return answer;
}
