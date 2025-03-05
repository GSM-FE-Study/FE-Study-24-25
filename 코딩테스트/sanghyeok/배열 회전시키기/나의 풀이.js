function solution(numbers, direction) {
    var answer = [];
    let i = 0;
    if(direction === "right"){
        let right = true;
        while(i < numbers.length - 1){
            if(i == 0 && right){
                answer.push(numbers[numbers.length - 1]);
                right = !right;
                i--;
            } else {
                answer.push(numbers[i]);
            }
            i++;
        }
    } else {
        let indexCount = 0;
        while(i < numbers.length){
            if(i == 0){
                indexCount = numbers[i]
                i++;
                continue;
            }
            answer.push(numbers[i]);
            i++;
            if(i == numbers.length){
                answer.push(indexCount);
            }
        }
    }
    return answer;
}