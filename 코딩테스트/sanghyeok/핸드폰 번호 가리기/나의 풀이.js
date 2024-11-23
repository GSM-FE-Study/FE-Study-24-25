function solution(phone_number) {
  return phone_number
    .split("")
    .map((x, index) => (index < phone_number.length - 4 ? "*" : x))
    .join("");
}
