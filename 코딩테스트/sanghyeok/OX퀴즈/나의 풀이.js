const solution = (quiz) => {
  return quiz
    .map((x) => x.split(" = "))
    .map((x) => {
      return eval(x[0]) === eval(x[1]) ? "O" : "X";
    });
};
