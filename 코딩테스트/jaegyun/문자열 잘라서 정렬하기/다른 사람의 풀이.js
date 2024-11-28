function solution(myString) {
  if (!myString.includes('x')) return [myString];

  let answer = myString.split(/[x]+/);
  {
    answer = answer.filter((str) => str.length !== 0);
    answer.sort();
  }

  return answer;
}
