function solution(arr) {
  // 배열에서 2가 있는 첫 번째와 마지막 인덱스 찾기
  const firstIndex = arr.indexOf(2);
  const lastIndex = arr.lastIndexOf(2);

  // 2가 있는 구간의 부분 배열 반환
  return firstIndex === -1 ? [-1] : arr.slice(firstIndex, lastIndex + 1);
}

// 입출력 예 테스트
console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]
