function solution(phone_number) {
  const len = phone_number.length;
  phone_number = phone_number.slice(len - 4);
  return "*".repeat(len - 4) + phone_number;
}
