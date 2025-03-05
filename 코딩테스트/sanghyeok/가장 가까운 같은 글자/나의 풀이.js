function solution(s) {
  var answer = [];
  return s.split("").map((x, index) => {
    let max = -1;
    for (let i = 0; i < index; i++) {
      if (s[i] === x) {
        max = index - i;
      }
    }
    if (max !== -1) {
      return max;
    }
    return max;
  });
}
