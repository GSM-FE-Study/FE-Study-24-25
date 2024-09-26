function solution(my_string) {
  var answer = '';
  const arr = Array.from(my_string);
  const num = my_string.length;
  
  for(var i = num-1; i >= 0; i--){
    arr.push(arr[i]);
  }
  arr.splice(0, num);
  answer = arr.join();
  answer = answer.replaceAll(',','');
  return answer;
}

/*
  join() : 배열의 모든 요소를 하나의 문자열로 바꿔주는 메소드
  replaceAll : 하나의 문자열에 일치하는 모든 문자열을 지정한 문자열로 바꿔주는 메소드
*/