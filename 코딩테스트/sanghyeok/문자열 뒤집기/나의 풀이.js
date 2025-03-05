function solution(my_string) {
    var answer = '';
    let i = my_string.length - 1;
    while(i >= 0){
        answer += my_string[i]
        i--;
    }
    return answer;
}