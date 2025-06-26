function solution(binomial) {
  const [a, op, b] = binomial.split(" "); // 공백 기준으로 문자열 분리
  return ops[op](+a, +b); // 연산자에 해당하는 함수 호출
}

const ops = {
  "+": (a, b) => a + b, // 덧셈 함수
  "-": (a, b) => a - b, // 뺄셈 함수
  "*": (a, b) => a * b, // 곱셈 함수
};

console.log(solution("43 + 12")); // 55
