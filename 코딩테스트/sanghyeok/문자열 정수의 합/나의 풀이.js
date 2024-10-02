function solution(num_str) {
    var answer = 0;
    let i = 0;
    while(i < num_str.length){
        answer += +num_str[i]
        i++;
    }
    return answer;
}