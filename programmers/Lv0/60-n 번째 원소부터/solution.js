function solution(num_list, n) {
  // n번째 원소부터 끝까지 잘라 반환
  return num_list.slice(n - 1);
}

// 입출력 예 테스트
console.log(solution([2, 1, 6], 3)); // [6]
console.log(solution([5, 2, 1, 7, 5], 2)); // [2, 1, 7, 5]
