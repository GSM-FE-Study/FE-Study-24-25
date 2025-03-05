function solution(spell, dic) {
  var answer = false;
  dic.forEach((x) => {
    let count = 0;
    let correct = new Array(spell.length).fill(0);
    for (let i = 0; i < x.length; i++) {
      if (x.length === spell.length) {
        if (spell.includes(x[i]) && correct[spell.indexOf(x[i])] === 0) {
          count += 1;
          correct[spell.indexOf(x[i])] = 1;
        }
      }
    }
    if (count === spell.length && count === x.length) {
      answer = true;
    }
  });
  if (answer) {
    return 1;
  } else {
    return 2;
  }
}
