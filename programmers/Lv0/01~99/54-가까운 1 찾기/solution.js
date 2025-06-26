function solution(arr, idx) {
  return arr.indexOf(1, idx);
}

// 입출력 예 테스트
console.log(solution([0, 0, 0, 1], 1)); // 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution([1, 1, 1, 1, 0], 3)); // 3
