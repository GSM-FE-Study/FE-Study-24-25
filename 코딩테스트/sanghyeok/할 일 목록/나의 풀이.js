const solution = (todo_list, finished) => {
  return todo_list.filter((x, index) => !finished[index]);
};
