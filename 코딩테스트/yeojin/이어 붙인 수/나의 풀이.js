function solution(num_list) {
  var answer = 0;
  let oddNumbers = '';
  let evenNumbers = '';
  num_list.forEach(item => {
      item % 2 == 0 ? evenNumbers += item.toString() : oddNumbers += item.toString();
  })
  answer = oddNumbers*1 + evenNumbers*1;
  return answer;
}

/*
  toString() : object를 문자열로 강제 형변환 시킨다.
*/