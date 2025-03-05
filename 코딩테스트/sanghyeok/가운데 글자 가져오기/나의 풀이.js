function solution(s) {
  return s
    .split("")
    .filter((x, index) =>
      s.length % 2 !== 0
        ? index === Math.floor(s.length / 2)
        : index === s.length / 2 || index === s.length / 2 - 1
    )
    .join("");
}
