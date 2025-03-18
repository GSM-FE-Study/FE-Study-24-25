function solution(arr, intervals) {
  return intervals.flatMap(ints => [...arr.slice(ints[0], ints[1] + 1)]);
}