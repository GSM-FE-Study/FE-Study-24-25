function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}

/*
  ~~ : 이중 틸드 연산자, 소수점 아래를 버리고 정수 부분 가져온다.
*/