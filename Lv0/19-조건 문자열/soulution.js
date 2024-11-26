// 조건 문자열 ( 첫 번째 방법 )
function solution1(ineq, eq, n, m) {
  if (ineq === ">" && eq === "=") return n >= m ? 1 : 0;
  if (ineq === "<" && eq === "=") return n <= m ? 1 : 0;
  if (ineq === ">" && eq === "!") return n > m ? 1 : 0;
  if (ineq === "<" && eq === "!") return n < m ? 1 : 0;
  return 0;
}

// 첫번째 테스트 코드
console.log(solution1("<", "=", 20, 50)); // 1
console.log(solution1(">", "!", 41, 78)); // 0

// 조건 문자열 ( 두 번째 방법 )
function solution2(ineq, eq, n, m) {
  const conditions = {
    ">=": (a, b) => a >= b,
    "<=": (a, b) => a <= b,
    ">!": (a, b) => a > b,
    "<!": (a, b) => a < b,
  };
  return conditions[ineq + eq](n, m) ? 1 : 0;
}

// 두번째 테스트 코드
console.log(solution2("<", "=", 20, 50)); // 1
console.log(solution2(">", "!", 41, 78)); // 0
