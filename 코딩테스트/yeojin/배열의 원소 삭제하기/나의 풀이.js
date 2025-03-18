function solution(arr, delete_list) {
  for(let del of delete_list) {
      for(let i = 0; i < arr.length; i++) {
          if(del == arr[i]) arr.splice(i, 1);
      }
  }
  return arr;
}