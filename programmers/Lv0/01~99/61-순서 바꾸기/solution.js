function solution(num_list, n) {
  // num_list를 n번째 원소를 기준으로 순서를 바꿔 반환
  return [...num_list.slice(n), ...num_list.slice(0, n)];
}

// 입출력 예 테스트
console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]
