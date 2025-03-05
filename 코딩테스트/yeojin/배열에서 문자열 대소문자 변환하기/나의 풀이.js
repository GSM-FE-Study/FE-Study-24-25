function solution(strArr) {
  var answer = [];
  let item = '';
  for (let i = 0; i < strArr.length; i++) {
      item = strArr[i];
      answer.push(i % 2 == 0 ? item.toLowerCase() : item.toUpperCase());
  }
  return answer;
}