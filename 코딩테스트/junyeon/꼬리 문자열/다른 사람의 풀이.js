const solution = (str_list, ex) =>
  str_list.filter((v) => !v.includes(ex)).join("");
