function solution(arr) {
  const stk = [];
  let prev = 100001;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const v = arr[i];
    if (v < prev) {
      stk.unshift(v);
      prev = v;
    }
  }
  return stk;
}
