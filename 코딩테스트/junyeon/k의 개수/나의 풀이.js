function solution(i, j, k) {
  let answer = 0;
  for (let x = i; x <= j; x++) {
    if (x.toString().includes(k.toString())) {
      for (let y = 0; y < x.toString().length; y++) {
        if (x.toString().split("")[y] === k.toString()) answer++;
      }
    }
  }
  return answer;
}
