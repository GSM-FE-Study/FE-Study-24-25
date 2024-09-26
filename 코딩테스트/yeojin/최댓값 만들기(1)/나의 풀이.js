function solution(numbers) {
  var answer = 0;
  var num1;
  var num2;

  function checkNum1(arr) {
    num1 = arr[0];
    for (var i = 1; i < arr.length; i++) {
      num1 = num1 >= arr[i] ? num1 : arr[i];
    }
    numbers.splice(
      numbers.findIndex((num) => num == num1),
      1
    );
  }

  function checkNum2(arr) {
    num2 = arr[0];
    for (var i = 1; i < arr.length; i++) {
      num2 = num2 >= arr[i] ? num2 : arr[i];
    }
  }

  checkNum1(numbers);
  checkNum2(numbers);

  answer = num1 * num2;
  return answer;
}

/*
  findIndex() : 조건에 해당하는 첫 번째 요소의 인덱스 값을 반환한다.
  splice() : 지정한 시작 인덱스부터 뒤로 지정한 삭제할 요소의 개수 만큼 요소를 삭제한다.
*/