function solution(n) {
    var answer = 0;
    let i = 0;
    while(i <= n){
        if(i % 2 == 0)
            answer += i;
        i++;
    }
    return answer;
}