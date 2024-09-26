const solution = (num_list) => {
  num_list.sort((a, b) => a - b);
  let arr = [];

  for (let i=0; i<5; i++) {
      arr.push(num_list[i]);
  }

  return arr;
}