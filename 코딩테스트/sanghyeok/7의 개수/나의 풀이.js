function solution(array) {
    var answer = 0;
    let arrayStr = String(array)
    let i = 0;
    while(i < arrayStr.length){
        if(arrayStr[i] === "7")
            answer++;
        i++;
    }
    return answer;
}