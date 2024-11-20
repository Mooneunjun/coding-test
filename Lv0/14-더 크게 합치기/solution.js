// 더 크게 합치기 (풀이)

function solution(a, b) {
  const ab = Number(String(a) + String(b)); // a ⊕ b 계산
  const ba = Number(String(b) + String(a)); // b ⊕ a 계산
  return ab >= ba ? ab : ba; // 더 큰 값 반환, 같다면 ab 반환
}

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898

// 더 크게 합치기 (다른 풀이)

function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898
