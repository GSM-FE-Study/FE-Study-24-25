function solution(slice, n) {
  var answer = 0;
  let check = false;
  do{
      check = false;
      answer++;
      if(slice * answer % n !== 0 && slice * answer < n){
          check = true;
      }
  } while (check);
  return answer;
}