function solution(a, b) {
  let num1 = a.toString() + b.toString();
  let num2 = b.toString() + a.toString();
  if (+num1 > +num2) {
    return +num1;
  } else {
    return +num2;
  }
}
