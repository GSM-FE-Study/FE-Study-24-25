function solution(arr, n) {
    var answer = [];
    if(arr.length % 2 == 0){
        let i = 0;
        while(i < arr.length){
            if(i % 2 == 1){
                arr[i] += n;
            }
            i++;
        }
    } else {
        let i = 0;
        while(i < arr.length){
            if(i % 2 == 0){
                arr[i] += n;
                
            }
            i++;
        }
    }
    answer = arr;
    return answer;
}