function solution(array) {
    return array.sort((a,b)=>{return a-b;}).at(Math.floor(array.length/2))    
}

/*
  .at() : 정숫값을 받아 해당 인덱스에 있는 항목을 반환한다. 음수를 준다면 뒤에서부터 센다.
*/