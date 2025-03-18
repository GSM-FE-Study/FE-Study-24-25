function solution(my_string, s, e) {
  const before = my_string.slice(0, s);
  const toReverse = my_string.slice(s, e + 1);
  const after = my_string.slice(e + 1);

  const reversed = toReverse.split('').reverse().join('');

  return before + reversed + after;
}
