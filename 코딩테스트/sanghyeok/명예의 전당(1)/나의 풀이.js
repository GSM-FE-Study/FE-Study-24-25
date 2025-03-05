function solution(k, score) {
  var answer = [];
  let counter = [];
  score.map((x) => {
    counter.push(x);
    counter.sort((a, b) => b - a);
    const index = counter.slice(0, k);
    answer.push(index.length < k ? index[index.length - 1] : index[k - 1]);
  });
  return answer;
}
