function solution(num_list) {
  let check = 1;
  let evenNum = 0;
  let oddNum = 0;
  num_list.forEach(item => check++ % 2 == 0 ? evenNum += item : oddNum += item)
  return evenNum > oddNum ? evenNum : oddNum;
}