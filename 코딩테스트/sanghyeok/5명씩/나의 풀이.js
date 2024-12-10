function solution(names) {
  let answer = [];
  let index = [];
  let count = [];

  for (let i = 0; i < names.length; i++) {
    index.push(names[i]);
    if (index.length === 5) {
      answer.push(index);
      index = [];
    }
  }

  if (index.length > 0) {
    answer.push(index);
  }

  for (let i = 0; i < answer.length; i++) {
    count.push(answer[i][0]);
  }

  return count;
}
