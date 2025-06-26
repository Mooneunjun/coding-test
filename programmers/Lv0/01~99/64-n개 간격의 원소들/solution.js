function solution(num_list, n) {
  // num_list에서 n개 간격으로 원소를 선택하여 반환
  return num_list.filter((_, index) => index % n === 0);
}

// 입출력 예 테스트
console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
console.log(solution([4, 2, 6, 1, 7, 6], 4)); // [4, 7]
