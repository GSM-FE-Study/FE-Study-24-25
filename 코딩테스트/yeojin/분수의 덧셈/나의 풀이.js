function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;

  function returnAnswer(numer, denom) {
    answer[0] = numer;
    answer[1] = denom;
  }

  if (numer !== 1 && denom !== 1) {
    for (let i = 2; i <= denom; i++) {
      if (numer % i === 0 && denom % i === 0) {
        numer /= i;
        denom /= i;
        i -= 1;
      }
    }
    returnAnswer(numer, denom);
  } else {
    returnAnswer(numer, denom);
  }
  return answer;
}
