function solution(num_list) {
  // findIndex를 사용하여 음수의 첫 번째 인덱스를 반환
  return num_list.findIndex((num) => num < 0);
}

// 입출력 예 테스트
console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution([13, 22, 53, 24, 15, 6])); // -1
