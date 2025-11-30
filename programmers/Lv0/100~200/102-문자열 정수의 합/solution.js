// 문자열 정수의 합

// 방법 1 // split 메서드 사용 합산
function solution(num_str) {
  return num_str.split("").reduce((a, c) => a + +c, 0);
}

// 방법 2 // 스프레드 연산자 사용 합산
function solution(num_str) {
  return [...num_str].reduce((a, c) => a + +c, 0);
}

// 방법 3 // for-of 반복문 사용 합산
function solution(num_str) {
  let sum = 0;
  for (let n of num_str) sum += Number(n);
  return sum;
}

// // 방법 4 // Array.from 메서드 사용 합산
function solution(num_str) {
  return Array.from(num_str).reduce((a, c) => a + +c, 0);
}

console.log(solution("123456789")); // 45
console.log(solution("1000000")); // 1
