function solution(numbers, num1, num2) {
  return numbers.slice(num1, (num2 + 1));
}

/*
  slice() : 시작할 인덱스와 종료 인덱스를 인자로 하며, 시작할 인덱스의 요소부터 종료할 인덱스의 앞 요소를 반환한다.
*/