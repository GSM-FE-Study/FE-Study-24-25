function solution(n) {
    var answer = [];
    var a = n
    for(let i = 2;i<=n;i++){
        if(n % i === 0){
            answer.push(i)
            n /= i
            i--
        }
    }
    const b = new Set(answer)
    const c = [...b]
    return c;
}