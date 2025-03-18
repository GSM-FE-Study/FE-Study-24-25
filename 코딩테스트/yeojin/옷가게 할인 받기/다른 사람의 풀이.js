function solution(price) {
    const discount = price < 100000 ? 0 : price < 300000 ? price / 20 : price < 500000 ? price / 10 : price / 5;
    return Math.floor(price - discount);
}