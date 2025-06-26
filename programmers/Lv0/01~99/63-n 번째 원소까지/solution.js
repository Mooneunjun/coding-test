function solution(num_list, n) {
  // num_list의 첫 번째 원소부터 n번째 원소까지 반환
  return num_list.slice(0, n);
}

// 입출력 예 테스트
console.log(solution([2, 1, 6], 1)); // [2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [5, 2, 1]
