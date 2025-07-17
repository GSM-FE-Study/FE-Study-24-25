function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
  });

  if (stk.length == 0) {
    stk = [-1];
  }
  return stk;
}
