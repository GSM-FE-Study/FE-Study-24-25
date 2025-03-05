function solution(friends, gifts) {
  let sender = {};
  let receiver = {};
  let grap = {};
  let count = {};
  let giftsGraph = {};
  friends.map((name) => {
    sender[name] = 0;
    receiver[name] = 0;
    count[name] = 0;
    giftsGraph[name] = 0;

    grap[name] = {};
    friends.map((name2) => {
      if (name === name2) {
        grap[name][name2] = "-";
      } else {
        grap[name][name2] = 0;
      }
    });
  });

  gifts
    .map((name) => name.split(" "))
    .map((value) => {
      sender[value[0]] += 1;
      receiver[value[1]] += 1;

      friends.map((name2) => {
        if (name2 === value[0]) {
          grap[name2][value[1]] += 1;
        }
      });
    });

  friends.map((value) => {
    giftsGraph[value] = sender[value] - receiver[value];
  });

  friends.map((name) => {
    friends.map((value) => {
      if (name !== value) {
        grap[name][value] > grap[value][name]
          ? (count[name] += 1)
          : grap[name][value] === grap[value][name]
          ? giftsGraph[name] > giftsGraph[value]
            ? (count[name] += 1)
            : null
          : null;
      }
    });
  });

  return Math.max(...Object.values(count)) === 0
    ? 0
    : Math.max(...Object.values(count));
}
