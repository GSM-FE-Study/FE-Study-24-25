function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

/*
  filter() : 지정한 부분을 지정한 요소로 채우는 메소드
*/