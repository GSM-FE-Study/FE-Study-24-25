function solution(array, n) {
  var answer = 0;
  var check = 0;
  var index;
  do {
    if (array.includes(n) == true) {
      answer++;
      index = array.findIndex((num) => num == n);
      array[index] = -1;
    } else {
      check = 1;
    }
  } while (check == 0);
  return answer;
}

/*
  includes() : 배열 안에 지정한 인수가 있다면 true를 반환하고 없다면 false를 반환한다
  findIndex() : 주어진 조건에 만족하는 가장 첫번째 요소의 인덱스값을 반환한다
*/