function solution(my_string) {
  let sum = 0;
  for (const ch of my_string) {
      if (!isNaN(ch)) sum += +ch;
  }
  return sum;
}