function solution(a, b) {
  const str1 = String(a) + String(b);
  const str2 = 2 * a * b;
  return str1 >= str2 ? +str1 : str2;
}