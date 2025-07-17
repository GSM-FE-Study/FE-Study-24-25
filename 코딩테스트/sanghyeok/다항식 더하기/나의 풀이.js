function solution(polynomial) {
  var answer = "";
  const x = "x";
  let temp = 0;
  let tempNum = 0;
  answer = polynomial.split(" ");
  answer.forEach((value) => {
    let array = [...value];
    if (array.indexOf(x) > 1) {
      let Index = "";
      array.forEach((value, index) => {
        if (index < array.length - 1) {
          Index += value;
        }
      });
      array = [Index, x];
    }
    if (array[array.length - 1] === x) {
      if (array[0] === x) {
        temp += 1;
      } else {
        temp += Number(array[0]);
      }
    } else if (array[0] === "+") {
    } else {
      tempNum += Number(value);
    }
  });
  return `${temp ? (temp === 1 ? "x" : `${temp}x`) : ""}${
    temp && tempNum ? " + " : ""
  }${tempNum ? tempNum : ""}`;
}
