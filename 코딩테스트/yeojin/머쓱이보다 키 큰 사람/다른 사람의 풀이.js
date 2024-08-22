function solution(array, height) {
    array.push(height);
    array.sort((a, b) => a - b);
    var answer = array.length - array.lastIndexOf(height) - 1;
    return answer;
}

/*
  push() : 배열의 끝에 요소를 추가한다
  sort() : 배열을 주어진 기준에 따라 정렬한 후 반환한다
  a - b : 배열을 작은 순서대로 정렬한다.
  lastIndexOf() : 지정한 인자와 같은 값을 가진 마지막 요소의 인덱스를 반환한다.
*/