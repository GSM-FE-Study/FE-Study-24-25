function solution(num_list) {
  return num_list.sort((a, b) => a - b).splice(5);
}

/*
  splice() : 배열에서 요소를 추가, 제거 또는 교체한다.
*/