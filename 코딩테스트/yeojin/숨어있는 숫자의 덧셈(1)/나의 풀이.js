function solution(my_string) {
  var answer = 0;
  const str = my_string.split('').map(item => +item).join().replaceAll('NaN','').replaceAll(',','') + '';
  str.split('').forEach(item => answer += +item);
  return answer;
}