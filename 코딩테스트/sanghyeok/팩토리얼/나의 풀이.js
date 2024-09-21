function solution(n) {
    var answer = 0;
    let count = 0;
    let factorial = 1;
    while(true){
        if(n < factorial){
            answer = count - 1;
            break;
        }
        count++;
        factorial = factorial * count;
    }
    return answer;
}