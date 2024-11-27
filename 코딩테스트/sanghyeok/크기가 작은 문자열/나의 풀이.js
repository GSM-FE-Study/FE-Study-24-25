function solution(t, p) {
  let arr = [];
  let temp = "";
  for (let i = 0; i < t.length; i++) {
    temp += t[i];
    if (temp.length === p.length) {
      arr.push(temp);
      i -= p.length - 1;
      temp = "";
    }
  }
  return arr.filter((x) => +x <= +p).length;
}
