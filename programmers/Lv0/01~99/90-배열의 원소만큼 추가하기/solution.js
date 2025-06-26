function solution(arr) {
  return arr.flatMap((num) => Array(num).fill(num));
}

console.log(solution([5, 1, 4])); // [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
