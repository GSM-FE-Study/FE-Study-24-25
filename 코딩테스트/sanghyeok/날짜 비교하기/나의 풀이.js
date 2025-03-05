function solution(date1, date2) {
  const sum = date1.map((x, index) =>
    x < date2[index] ? 1 : x === date2[index] ? 0 : -1
  );
  return sum[0] < 0
    ? 0
    : sum[0] > 0
    ? 1
    : sum[1] < 0
    ? 0
    : sum[1] > 0
    ? 1
    : sum[2] < 0
    ? 0
    : sum[2] > 0
    ? 1
    : 0;
}
