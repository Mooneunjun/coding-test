// n의 배수

function solution(num, n) {
  return num % n === 0 ? 1 : 0; // num이 n의 배수이면 1, 아니면 0 반환
}

console.log(solution(98, 2)); // 1
console.log(solution(34, 3)); // 0
