function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? (a-b):a*2];
}

/*
  reverse() : 배열의 요소를 반전 시킴, 원본 배열을 변환함 -> 전개연산을 이용하여 reverse해줌
  // a, b는 각각 반전된 배열의 0번, 1번 요소가 됨(마지막요소와 그 앞 요소)
*/