function solution(numlist, n) {
  let answer = [];
  if (numlist.includes(n)) {
    answer.push(n);
  }
  const List = numlist.filter((item) => item !== n);
  List.sort((a, b) => {
    const A = Math.abs(a - n);
    const B = Math.abs(b - n);
    if (A === B) {
      return b - a;
    }
    return A - B;
  });
  answer = answer.concat(List);
  return answer;
}
