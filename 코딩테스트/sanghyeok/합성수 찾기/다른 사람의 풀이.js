function solution(n) {
    let count = 0;
    for (let i = 4; i <= n; i++) {
        if ([5, 7].includes(i)) continue
        const valide = [2, 3, 5, 7].some(k => i % k === 0);
        count += valide ? 1 : 0
    }

    return count;
}