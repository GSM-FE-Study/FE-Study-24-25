function solution(s) {
  s = [" ", ...s];

  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] == " " && typeof s[i] == "string") {
      s[i] = s[i].toUpperCase();
    } else if (typeof s[i] == "string") {
      s[i] = s[i].toLowerCase();
    }
  }

  s.shift();
  return s.join("");
}
