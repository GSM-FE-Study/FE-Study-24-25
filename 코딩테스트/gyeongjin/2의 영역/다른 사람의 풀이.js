function solution(arr) {
  if (!arr.includes(2)) return [-1];

  let left = 0,
    right = arr.length - 1;
  while (arr[left] !== 2) left++;
  while (arr[right] !== 2) right--;

  return arr.slice(left, right + 1);
}
