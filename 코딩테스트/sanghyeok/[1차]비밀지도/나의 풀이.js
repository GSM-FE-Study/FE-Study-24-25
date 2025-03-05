function solution(n, arr1, arr2) {
  let Arr1 = arr1.map((x) => {
    let sum = "";
    for (let i = 0; i < n; i++) {
      sum += x % 2;
      x = Math.floor(x / 2);
    }
    return sum.split("").reverse().join("");
  });
  let Arr2 = arr2.map((x) => {
    let sum = "";
    for (let i = 0; i < n; i++) {
      sum += x % 2;
      x = Math.floor(x / 2);
    }
    return sum.split("").reverse().join("");
  });
  let sum = [];
  for (let i = 0; i < n; i++) {
    let count = "";
    for (let j = 0; j < n; j++) {
      if (Arr1[i][j] === "1" || Arr2[i][j] === "1") {
        count += "#";
      } else {
        count += " ";
      }
    }
    sum.push(count);
  }
  return sum;
}
