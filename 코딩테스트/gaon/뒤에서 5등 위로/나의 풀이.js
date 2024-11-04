function solution(num_list) {
  const sortedList = num_list.sort((a, b) => a - b);
  const slicedList = sortedList.slice(5);

  return slicedList;
}
