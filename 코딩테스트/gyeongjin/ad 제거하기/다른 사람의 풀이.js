function solution(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].indexOf("ad") !== -1) {
      strArr.splice(i, 1);
      i--;
    }
  }
  return strArr;
}
