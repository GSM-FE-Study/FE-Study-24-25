function solution(my_string) {
  return my_string
    .split("")
    .filter((char) => !isNaN(char))
    .map((number) => parseInt(number))
    .sort((a, b) => a - b);
}