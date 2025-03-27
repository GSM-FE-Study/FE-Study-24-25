function solution(numbers) {
  const squareList = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      squareList.push(numbers[i] * numbers[j]);
    }
  }

  return Math.max(...squareList);
}
