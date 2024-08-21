function solution(hp) {
  const answer =
    Math.trunc(hp / 5) + Math.trunc((hp % 5) / 3) + Math.trunc((hp % 5) % 3);

  return answer;
}
