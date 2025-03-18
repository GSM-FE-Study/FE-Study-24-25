function solution(hp) {

    let cnt = 0;

    [5,3,1].forEach(v => {

        cnt += Math.floor(hp/v);

        hp = hp % v;
    })

    return cnt;
}