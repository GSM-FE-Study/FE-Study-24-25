function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

/*
  filter() : 주어진 판별 함수의 결괏값이 true인 요소만 모아 새로운 배열로 반환
*/
