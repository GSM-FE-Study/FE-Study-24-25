function solution(num_list) {
  var answer = 0;
  let gob = 1;
  let hab = 0;
  num_list.forEach(item => gob *= item);
  num_list.forEach(item => hab += item);
  return (gob > (hab * hab) ? 0 : 1);
}