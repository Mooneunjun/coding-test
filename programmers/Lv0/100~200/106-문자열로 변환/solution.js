// 문자열로 변환

// 방법 1 // String() 함수 사용
function solution(n) {
  return String(n);
}

// 방법 2 // 단항 연산자 + 사용
function solution(n) {
  return n + "";
}

// 방법 3 // 문자열 템플릿 사용
function solution(n) {
  return `${n}`;
}

// 방법 4 //  `toString()` 메서드 사용
function solution(n) {
  return n.toString();
}

console.log(solution(123));
console.log(solution(2573));
