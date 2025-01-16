function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      // 0번 인덱스부터 b번 인덱스까지
      return num_list.slice(0, b + 1);
    case 2:
      // a번 인덱스부터 마지막 인덱스까지
      return num_list.slice(a);
    case 3:
      // a번 인덱스부터 b번 인덱스까지
      return num_list.slice(a, b + 1);
    case 4:
      // a번 인덱스부터 b번 인덱스까지 c 간격으로
      return num_list.slice(a, b + 1).filter((_, idx) => idx % c === 0);
    default:
      return [];
  }
}

// 입출력 예 테스트
console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 3, 4, 5, 6]
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 4, 6]
