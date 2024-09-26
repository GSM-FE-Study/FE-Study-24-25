function solution(my_string, n) {
    var answer = '';
    let i = 0;
    while(i < n){
        answer += my_string[i];
        i++;
    }
    return answer;
}