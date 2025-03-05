function solution(my_string, alp) {  
    let regex = new RegExp(alp, 'g');
    return my_string.replace(regex, alp.toUpperCase());
}