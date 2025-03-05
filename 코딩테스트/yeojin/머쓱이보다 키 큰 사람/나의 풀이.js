function solution(array, height) {
  var answer = 0;
  const newArray = array.filter(num => num > height);
  answer = newArray.length;
  return answer;
}