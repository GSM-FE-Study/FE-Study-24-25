function solution(my_string, alp) {
  return [...my_string].map((v)=> v.includes(alp) ? v.toUpperCase() : v.toLowerCase()).join("");
}