function solution(array) {
    var answer = [];
    let i = 0;
    let countNum = 0;
    let countIndex = 0;
    while(i < array.length){
        if(i == 0){
            countNum = array[i];
            countIndex = i;
        }
        if(countNum < array[i]){
            countNum = array[i];
            countIndex = i;
        }
        i++;
    }
    answer = [countNum, countIndex];
    return answer;
}