function solution(n) {
  const result = [n]; // 초기값 n을 배열에 저장

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2; // n이 짝수면 2로 나눔
    } else {
      n = 3 * n + 1; // n이 홀수면 3 * n + 1
    }
    result.push(n); // 계산 결과를 배열에 추가
  }

  return result; // 콜라츠 수열 반환
}

console.log(solution(10)); // [10, 5, 16, 8, 4, 2, 1]
