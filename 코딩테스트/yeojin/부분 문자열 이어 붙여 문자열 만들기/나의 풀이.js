function solution(my_strings, parts) {
  var answer = [];
  for(let i = 0; i < my_strings.length; i++){
      let arr = parts[i]
      answer.push(my_strings[i].substring(arr[0], arr[1]+1));
  }
  answer = answer.join();
  answer = answer.replaceAll(",","");
  return answer;
}