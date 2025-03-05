function solution(num_list) {
    var answer = 0;
    let i = 0;
    let plusNum = 0;
    let multNum = 1;
    while(i < num_list.length){
        plusNum += num_list[i];
        multNum = multNum * num_list[i]
        i++;
    }
    if(plusNum**2 > multNum){
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}