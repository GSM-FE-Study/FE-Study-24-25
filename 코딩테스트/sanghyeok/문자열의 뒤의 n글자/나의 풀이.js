function solution(my_string, n) {
    let answer = "";
    let i = 0;
    n = -n;
    while(n < 0){
        answer += my_string.at(n)
        n++;
    }
    return answer;
}