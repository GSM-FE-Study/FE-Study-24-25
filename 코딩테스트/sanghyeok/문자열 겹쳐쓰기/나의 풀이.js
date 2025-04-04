function solution(my_string, overwrite_string, s) {
  let myString = my_string.split("");
  const OWString = overwrite_string.split("");
  const answer = myString.map((x, index) => {
    if (index >= s && OWString.length > index - s) {
      return OWString[index - s];
    }
    return x;
  });
  return answer.join("");
}
