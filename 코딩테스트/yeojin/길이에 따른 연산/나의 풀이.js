function solution(num_list) {
  let hap = 0;
  let gob = 1;
  const Length = num_list.length;
  Length > 10 ? num_list.forEach(i => hap += i) : num_list.forEach(i => gob *= i);
  return Length > 10 ? hap : gob;
}