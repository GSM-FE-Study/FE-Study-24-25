function solution(str_list) {
  let flag = null;

  const idx = str_list.findIndex((v) => {
    const res = v === "l" || v === "r";

    if (res) {
      flag = v;
    }

    return res;
  });

  if (!flag) {
    return [];
  } else if (flag === "l") {
    return str_list.slice(0, idx);
  } else {
    return str_list.slice(idx + 1);
  }
}
