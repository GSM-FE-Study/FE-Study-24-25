function solution(array) {
  var answer = 0;
  let num = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      num = array[j];

      if (array[j + 1] < num) {
        array[j] = array[j + 1];
        array[j + 1] = num;
      }
    }
  }

  return (answer = array[Math.floor(array.length / 2)]);
}
