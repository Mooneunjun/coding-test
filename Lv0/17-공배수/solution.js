// 공배수
function solution(number, n, m) {
  return +!(number % n || number % m);
}

console.log(solution(60, 2, 3)); // 1
console.log(solution(55, 10, 5)); // 0
