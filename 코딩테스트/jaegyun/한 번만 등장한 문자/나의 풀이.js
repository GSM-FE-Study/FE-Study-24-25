function solution(s) {
  let arr = s.split('').filter((char) => {
    return s.indexOf(char) === s.lastIndexOf(char);
  });

  return arr.sort().join('');
}
