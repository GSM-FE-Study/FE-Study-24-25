function solution(n) {
    // 문자풀이
    // return parseInt((n+"").split("").sort().reverse().join(""));

    // 숫자풀이
    var r = 0, e = 0, arr = [];

    do {
        e = n%10;

        // 정렬
        if (arr.length == 0) arr.push(e);
        else for (var i=0, len=arr.length; i<len; i++) {
            if (arr[i] <= e) { arr.splice(i,0,e); break; }
            if (i == len-1) arr.push(e);
        }
    } while (n = Math.floor(n/10), n>0);

    return parseInt(arr.join(""));
}