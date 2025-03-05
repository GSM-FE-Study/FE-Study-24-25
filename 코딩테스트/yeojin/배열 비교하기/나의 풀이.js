function solution(arr1, arr2) {
  const A = arr1.length;
  const B = arr2.length;
  let sumA = 0;
  arr1.forEach(i => sumA += i);
  let sumB = 0;
  arr2.forEach(i => sumB += i);
  return A == B ? (sumA == sumB ? 0 : (sumA > sumB ? 1 : -1)) : (A > B ? 1 : -1);
}