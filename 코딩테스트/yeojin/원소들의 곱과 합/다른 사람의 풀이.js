function solution(num_list) {
  let number1 = 1;
  let number2 = 0;

  num_list.forEach((value) => {
      number1 = Math.imul(number1, value);
      number2 += value;
  });
  return number1 > number2**2 ? 0 : 1;
}