function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}

/*
  ...(전개 연산자) : 각 항목을 펼쳐서 보여줌
  
  join() : 배열의 모든 요소를 구분자를 기준으로 문자열로 구분하여 새 문자열을 만들어 반환하는 메소드
*/