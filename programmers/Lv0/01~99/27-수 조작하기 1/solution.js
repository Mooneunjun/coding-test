function solution(n, control) {
  // 연산을 수행할 함수 객체
  const operations = {
    w: (n) => n + 1,
    s: (n) => n - 1,
    d: (n) => n + 10,
    a: (n) => n - 10,
  };

  let result = n; // 초기값 할당

  // control 문자열을 순회하며 연산 수행
  for (const op of control) {
    result = operations[op](result); // result에 연산 결과를 할당
  }

  //  conrol 문자열을 순회한 후, result의 최종값을 반환
  return result;
}

console.log(solution(0, "wsdawsdassw")); // 출력: -1
