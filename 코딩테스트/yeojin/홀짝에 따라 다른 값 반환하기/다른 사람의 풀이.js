function solution(n) {
  let oddSum = 0;
  let evenSum = 0;

  for(let i = n; i > 0; i--) {
      if(i%2==0) {
          evenSum += Math.pow(i, 2);
      } else {
          oddSum += i;
      }
  }

  return n%2 == 0 ? evenSum : oddSum;
}