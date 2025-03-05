const solution = (a, q) =>
  q.length
    ? solution(
        a.map((v, i) =>
          i >= q[0][0] && i <= q[0][1] && !(i % q[0][2]) ? v + 1 : v
        ),
        q.slice(1)
      )
    : a;
