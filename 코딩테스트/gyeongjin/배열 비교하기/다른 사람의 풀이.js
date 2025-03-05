function solution(arr1, arr2) {
  var answer = 0;
  if (arr1.length !== arr2.length) {
    answer = arr1.length > arr2.length ? 1 : -1;
  } else {
    answer =
      arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b)
        ? 1
        : arr1.reduce((a, b) => a + b) == arr2.reduce((a, b) => a + b)
        ? 0
        : -1;
  }
  return answer;
}
