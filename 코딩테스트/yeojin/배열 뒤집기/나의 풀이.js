function solution(num_list) {
  var answer = [];
  const num = answer.length;

  function changeArr(item) {
    answer.unshift(item);
  }

  num_list.forEach(changeArr);
  return answer;
}

/*
  unshift() : 배열의 맨 앞에 지정한 요소를 추가한다.
*/
