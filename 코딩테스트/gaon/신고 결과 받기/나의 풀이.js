function solution(id_list, report, k) {
  const userObject = {};
  const stoppedUser = [];

  id_list.forEach((userId) => {
    userObject[userId] = { reportedUser: [], count: 0 };
  });

  report.forEach((i) => {
    const [a, b] = i.split(" ");
    if (!userObject[a].reportedUser.includes(b)) {
      userObject[a].reportedUser.push(b);
      userObject[b].count++;
    }
  });

  id_list.forEach((userId) => {
    if (userObject[userId].count >= k) stoppedUser.push(userId);
  });

  const answer = id_list.map((userId) => {
    let mailCount = 0;

    userObject[userId].reportedUser.forEach((user) => {
      if (stoppedUser.includes(user)) mailCount++;
    });

    return mailCount;
  });

  return answer;
}
