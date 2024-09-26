function solution(my_string, is_suffix) {
    var answer = 0;
    let i = 0;
    let count = 0;
    let reverseI = -1;
    while(i < is_suffix.length){
        if((reverseI == -1 && is_suffix.at(reverseI) !== my_string.at(reverseI)) || (my_string.length < is_suffix.length)){
            break;
        }
        if(is_suffix.at(reverseI) === my_string.at(reverseI)){
            count++
        }
        if(count === is_suffix.length){
            answer = 1;
            break;
        }
        i++;
        reverseI--;
    }
    return answer;
}