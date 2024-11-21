function solution(absolutes, signs) {
  const answer = absolutes.map((value, index) =>
    signs[index] ? value : -1 * value
  );
  return answer.reduce((x, y) => x + y);
}
