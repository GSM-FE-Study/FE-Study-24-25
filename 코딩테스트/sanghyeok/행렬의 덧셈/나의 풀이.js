function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let index = [];
    for (let j = 0; j < arr1[i].length; j++) {
      index.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(index);
  }
  return answer;
}
