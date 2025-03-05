function solution(n) {
    var answer = [];
    let count = 2;
    let input = false;
    while (true){
        if (n % count == 0){
            if(input == false){
                answer.push(count);
                input = true;
            }
            n = n / count;
        } else {
            count++;
            input = false
        }
        if (n <= 1){
            break;
        }
    }
    return answer;
}