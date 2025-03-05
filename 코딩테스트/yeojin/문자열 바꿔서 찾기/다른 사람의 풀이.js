function solution(str, pat) {
  pat = pat.replaceAll('A', 'X').replaceAll('B', 'A').replaceAll('X', 'B')

  return str.indexOf(pat) === -1 ? 0 : 1
}