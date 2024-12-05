function solution(array, commands) {
  return commands.map((x) => {
    let sum = [];
    array.map((y, index) => {
      if (x[0] - 1 <= index && x[1] > index) {
        sum.push(y);
      }
    });
    return sum.sort((a, b) => a - b)[x[2] - 1];
  });
}
