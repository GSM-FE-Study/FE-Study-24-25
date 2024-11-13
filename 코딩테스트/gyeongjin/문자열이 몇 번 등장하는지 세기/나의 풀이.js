2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
function solution(myString, pat) {
  let answer = 0;
  let idx = myString.indexOf(pat);

  while (idx !== -1) {
    answer++;
    idx = myString.indexOf(pat, idx + 1);
  }

  return answer;
}
