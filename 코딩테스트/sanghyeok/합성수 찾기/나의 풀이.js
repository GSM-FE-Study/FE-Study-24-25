function solution(n) {
    var answer = 0;
    let i = 1;
    let j = 1;
    while(i <= n){
        j = 0;
        while(j < i){
            if(j != i && j != 1){
                if(i % j == 0){
                    answer++;
                    break;
                }
            }
            j++;
        }
        i++
    }
    return answer;
}