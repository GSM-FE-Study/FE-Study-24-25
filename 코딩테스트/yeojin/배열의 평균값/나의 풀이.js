function solution(numbers) {
  var answer =
    numbers.reduce(
      (addReducer = (acc, item) => {
        return (acc += item);
      }),
      0
    ) / numbers.length;
  return answer;
}

/*
  reduce() : 각각 배열 요소들을 인자로 하는 reduser 함수를 실행하여 값을 하나로 줄여 반환한다.
  - reduser 함수를 필수 인자로 갖는다.

  reduser 함수
  - 누산기와 현재 요소를 가르키는 변수를 필수 인자로 갖는다.

  length : 배열의 요소의 개수를 반환한다.
*/
