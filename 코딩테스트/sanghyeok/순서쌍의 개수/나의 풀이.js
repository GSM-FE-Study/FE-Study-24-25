function solution(n) {
    var answer = 0;
    let i = 0;
    let count = 0;
    while(i <= n){
        if(Number.isInteger(n / i))
            answer++;
        i++;
    }
    return answer;
}