var waterMelon = (n) => "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: " + waterMelon(3));
console.log("n이 4인 경우: " + waterMelon(4));
