function solution(my_string) {
    var answer = [];
    let index = "";
    let i = 0;
    while(i <= my_string.length){
        if(my_string[i] === " " || i === my_string.length){
            if(index !== ""){
                answer.push(index);
                index = "";
            }
        } else {
            index += my_string[i];
        }
        i++;
    }
    return answer;
}