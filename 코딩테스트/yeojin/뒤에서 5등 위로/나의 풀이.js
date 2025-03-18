function solution(num_list) {
  var answer = [];
  num_list.sort((a,b) => a - b);
  for(let i = 0; i < 5; i++){
      num_list.shift()
  }
  return num_list;
}

/*
  sort() : 배열의 요소를 정렬한 후 배열을 반환한다.
  (a,b)=>a-b : 값이 작은 순서대로 정렬한다.
  shift() : 맨 앞 요소를 삭제한다.
*/