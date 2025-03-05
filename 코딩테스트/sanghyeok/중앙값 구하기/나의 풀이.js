function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let lenArray = Math.floor(array.length / 2);
  return sortedArray[lenArray];
}
