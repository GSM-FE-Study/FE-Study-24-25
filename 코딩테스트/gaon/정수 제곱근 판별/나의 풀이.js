function solution(n) {
  const root = Math.sqrt(n);

  return root > 0 && Number.isInteger(root) ? (root + 1) * (root + 1) : -1;
}
