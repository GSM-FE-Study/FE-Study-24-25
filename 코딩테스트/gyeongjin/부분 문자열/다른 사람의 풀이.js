function solution(str1, str2) {
  const regex = new RegExp(str1, "g");
  return str2.match(regex) ? 1 : 0;
}
