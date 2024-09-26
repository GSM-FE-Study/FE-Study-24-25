function solution(my_string, is_prefix) {
    var answer = 0;
    let i = 0;
    let count = 0;
    while(i < is_prefix.length){
        if((is_prefix.length > my_string.length) || (i == 0 && is_prefix[i] !== my_string[i])){
            answer = 0
            break;
        }
        if(is_prefix[i] === my_string[i]){
            count++;
        }
        if(count === is_prefix.length){
            answer = 1
        }
        i++;
    }
    return answer;
}