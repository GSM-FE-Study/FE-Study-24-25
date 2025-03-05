function solution(age) {
    var answer = '';
    let i = 0;
    let ageStr = String(age);
    while(i < ageStr.length){
        answer += (String.fromCharCode(+ageStr[i] + 97));
        i++;
    }
    return answer;
}