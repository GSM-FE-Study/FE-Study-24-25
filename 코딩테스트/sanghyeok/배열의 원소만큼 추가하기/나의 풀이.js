function solution(arr) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        let count = arr[i];
        let j = 0;
        while(j < count){
            answer.push(arr[i])
            j++;
        }
    }
    return answer;
}