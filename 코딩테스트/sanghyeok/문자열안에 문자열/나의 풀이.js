function solution(str1, str2) {
    var answer = 0;
    let i = 0;
    let j = 0;
    let count = 0;
    
    while (i < str1.length) {
        if (str1[i] === str2[j]) {
            count++;
            j++;
        } else {
            j = 0; 
            count = 0;
        }
        i++;
        if (count === str2.length) {
            answer = 1;
            break;
        }
    }
    if (answer === 0) {
        answer = 2;
    }
    
    return answer;
}
        