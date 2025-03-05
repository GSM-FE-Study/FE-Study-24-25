function solution(n) {
    var answer = 0;
    let i = 0;
    if(n % 2 == 0){
        while(i <= n){
            if(i % 2 == 0){
                answer += i**2
            }
            i++;
        }
    } else {
        while(i <= n){
            if(i % 2 == 1){
                answer += i
            }
            i++;
        }
    }
    return answer;
}