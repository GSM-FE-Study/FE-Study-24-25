function solution(numbers) {
  const max1 = numbers.reduce((max, n) => (max > n ? max : n), 0);
  const index = numbers.findIndex((n) => n === max1);

  numbers.splice(index, 1);

  const max2 = numbers.reduce((max, n) => (max > n ? max : n), 0);

  return max1 * max2;
}
