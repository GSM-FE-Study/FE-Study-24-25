function solution(s1, s2) {
    var answer = 0;
    let i = 0;
    let j = 0;
    while (i < s1.length){
        j = 0;
        while(j < s2.length){
            if(s1[i] === s2[j])
                answer++;
            j++;
        }
        i++;
    }
    return answer;
}