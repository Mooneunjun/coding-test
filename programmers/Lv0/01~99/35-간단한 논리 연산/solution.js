function solution(x1, x2, x3, x4) {
  // 논리 연산 계산
  return (x1 || x2) && (x3 || x4);
}

console.log(solution(false, true, true, true)); // true
console.log(solution(true, false, false, false)); // false
