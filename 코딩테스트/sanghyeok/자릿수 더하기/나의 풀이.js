function solution(n) {
    var answer = 0;
    let strN = String(n).split("");
    let i = 0
    let numStrN = strN.map(Number);
    while(i < numStrN.length){         
        answer = answer + numStrN[i]
        i++;
    }
    return answer;
}