function solution(array, n) {
  let temp = [];
  let Index = [];
  array.forEach((x) => {
    temp.push(Math.abs(x - n));
  });
  let min = Math.min(...temp);

  temp.forEach((x, index) => {
    if (x === min) {
      Index.push(index);
    }
  });
  return array[Index.reduce((a, b) => (array[a] < array[b] ? a : b))];
}
