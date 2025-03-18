function solution(age) {
  return new Date().getFullYear() - age + 1;
}

/*
  new 연산자 : 새로운 객체를 생성함
  Date() 함수 : 현재 날짜와 시간을 문자열로 반환함
  new Date() : Date 객체에 인스턴스를 생성하여 현재 날짜와 시간으로 초기화함
  getFullYear() 메서드 : Date 객체의 연도를 반환함

  주의 사항 : Date는 현재 날짜를 가져오기 때문에 2022년도에 작성한 코드가 아니라면 정답이 아니다.
*/