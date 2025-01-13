function solution(n, k) {
  return Array.from({ length: ~~(n / k) }, (_, i) => (i + 1) * k);
}

// 입출력 예 테스트
console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]
