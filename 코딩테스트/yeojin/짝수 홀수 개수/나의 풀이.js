function solution(num_list) {
  var answer = [];
  const evenNum = num_list.filter(n => n % 2 === 0);
  const oddNum = num_list.filter(n => n % 2 !== 0);
  answer = [(evenNum.length), (oddNum.length)];
  return answer;
}

/*
  filter() : 조건에 해당하는 요소들만 모아 새로운 배열로 반환함
*/