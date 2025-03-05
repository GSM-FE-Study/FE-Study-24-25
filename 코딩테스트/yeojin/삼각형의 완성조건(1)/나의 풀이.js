function solution(sides) {
  var answer = 0;
  const max = Math.max(...sides);
  const maxIdx = sides.findIndex(item => item == max);
  let sum = 0;
  sides.filter((item, idx) => idx != maxIdx).forEach(item => sum+= item);
  return max < sum ? 1 : 2;
}