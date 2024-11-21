// 두의 연산값 비교하기
// 첫 번째 방식
function solution(a, b) {
  const ab = Number(`${a}${b}`); // a ⊕ b 계산
  const product = 2 * a * b; // 2 * a * b 계산
  return ab >= product ? ab : product; // 더 큰 값 반환, 같으면 ab 반환
}

console.log(solution(2, 91)); // 364

// 두 번째 방식
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), 2 * a * b); // 두 값 중 더 큰 값을 반환
}

console.log(solution(91, 2)); // 912
