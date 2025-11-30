// 방법 1 // Number() 함수 사용
function solution(n_str) {
  return Number(n_str);
}

// 방법 1-1 // Number() 함수 사용
// const solution = Number;

// 방법 2 // parseInt() 함수 사용
// function solution(n_str) {
//   return parseInt(n_str, 10);
// }

// 방법 3 // 단항 연산자 + 사용
// function solution(n_str) {
//   return +n_str;
// }

// 방법 4
console.log(solution("10"));
console.log(solution("8542"));
