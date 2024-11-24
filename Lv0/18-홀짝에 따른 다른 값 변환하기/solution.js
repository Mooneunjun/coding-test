// 문제: 홀수에 따른 다른 값 변환하기
function solution(n) {
  if (n % 2 === 1) {
    // n이 홀수인 경우
    return Array.from({ length: Math.ceil(n / 2) }, (_, i) => 2 * i + 1).reduce(
      (sum, num) => sum + num,
      0
    );
  } else {
    // n이 짝수인 경우
    return Array.from({ length: n / 2 }, (_, i) => (i + 1) * 2).reduce(
      (sum, num) => sum + num ** 2,
      0
    );
  }
}

console.log(solution(7)); // 16
