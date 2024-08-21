function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}

/*
  sort() : 배열의 요소를 정렬한 후 배열을 반환한다.
  (a,b)=>b-a : 값이 큰 순서대로 정렬한다.
*/