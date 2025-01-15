function solution(start_num, end_num) {
  // start_num부터 end_num까지 1씩 감소하는 배열 생성
  const result = [];
  for (let i = start_num; i >= end_num; i--) {
    result.push(i);
  }
  return result;
}

// 입출력 예 테스트
console.log(solution(10, 3)); // [10, 9, 8, 7, 6, 5, 4, 3]
