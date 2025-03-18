function solution(array) {
  var answer = 0;
  array.sort((a, b) => a - b);
  console.log(array);
  const index = Math.trunc((array.length) / 2);
  answer = array[index];
  return answer;
}

/*
  sort() : 배열의 요소를 정렬한 후 배열을 반환한다.
  (a, b) => a - b : 배열을 작은 순서로 정렬한다.
  Math.trunc() : 숫자의 정수 부분만 반환한다.
*/