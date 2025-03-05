function solution(sizes) {
  sizes.map((x) => x.sort((a, b) => a - b));
  return (
    Math.max(...sizes.map((a) => a[0])) * Math.max(...sizes.map((b) => b[1]))
  );
}
