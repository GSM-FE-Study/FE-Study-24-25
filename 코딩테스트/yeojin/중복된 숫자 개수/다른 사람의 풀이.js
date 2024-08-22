function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n)
    answer = Array.length

    return answer;
}

/*
  filter() : 주어진 조건에 만족하는 요소를 모아서 새로운 배열로 반환한다.
*/