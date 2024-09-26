function solution(array) {
  var answer = [];
  let maxNum = array[0];
  for(let i = 1; i < array.length; i++){
      maxNum < array[i] ? maxNum = array[i] : maxNum;
  }
  answer.push(maxNum);
  answer.push(array.findIndex(num => num == maxNum));
  return answer;
}

/*
  findIndex() : 조건에 맞는 가장 첫번째 요소의 인덱스를 반환한다.
*/