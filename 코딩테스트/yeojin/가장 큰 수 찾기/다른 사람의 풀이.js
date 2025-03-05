function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}

/*
  ... : 전개 연산자, 각 항목을 펼쳐서 보여줌
  Math.max : 가장 큰 수를 반환한다.
*/