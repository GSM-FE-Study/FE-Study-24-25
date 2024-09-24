function solution(s) {
    var answer = '';
    let i = 0;
    let array = Array(27).fill(0);
    while(i < s.length){
        array[s.charCodeAt(i) - 97] += 1
        i++;
    }
    i = 0
    while(i < array.length){
        if(array[i] == 1)
            answer += String.fromCharCode(i + 97);
        i++
    }
    return answer;
}