function solution(number) {
  return [...number].reduce((a, b) => a + +b, 0) % 9;
}

console.log(solution("123")); // 6
console.log(solution("78720646226947352489")); // 2
