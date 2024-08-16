// for를 이용
function solution(numbers) {
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var answer = sum / numbers.length;
  return answer;
}

// map 메소드 이용
function solution(numbers) {
  let result = 0;

  numbers.map((item) => {
    result += item;
  });

  return result / numbers.length;
}

/*
  map() : 배열의 요소들이 각각 함수를 호출한 결과를 모아 새로운 함수로 반환한다.
*/
