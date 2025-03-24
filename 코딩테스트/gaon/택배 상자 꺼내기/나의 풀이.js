function solution(n, w, num) {
  const maxLevel = Math.ceil(n / w);
  const plate = [];
  let boxNum = 1;
  let foundedIndex;
  let result = 0;

  for (let level = 1; level <= maxLevel; level++) {
    plate[level] = [];

    if (level % 2) {
      for (let i = 1; i <= w; i++) {
        if (boxNum > n) break;
        plate[level][i] = boxNum;
        boxNum++;
      }
    } else {
      for (let i = w; i > 0; i--) {
        if (boxNum > n) break;
        plate[level][i] = boxNum;
        boxNum++;
      }
    }
  }

  for (let level = 1; level <= maxLevel; level++) {
    if (typeof foundedIndex === "undefined") {
      if (plate[level].includes(num)) foundedIndex = plate[level].indexOf(num);
    } else {
      if (typeof plate[level][foundedIndex] === "number") result++;
    }
  }

  return result + 1;
}
