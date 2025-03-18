function solution(emergency) {
  const copyArr = [...emergency].sort((a, b) => b - a);
  return emergency.map((v, i) => copyArr.indexOf(v) + 1);
}
