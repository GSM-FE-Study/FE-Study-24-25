function solution(arr, idx) {
  var answer = 0;
  for(let i = idx; i < arr.length; i++) {
      answer = arr[i] === 1 ? i : -1;
      if(answer !== -1) break;
  }
  return answer;
}