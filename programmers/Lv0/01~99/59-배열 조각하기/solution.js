function solution(arr, query) {
  // query 배열을 순회하며 arr을 조작
  query.forEach((v, i) => {
    i % 2 === 0 ? arr.splice(v + 1) : arr.splice(0, v);
  });

  return arr;
}

// 입출력 예 테스트
console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // [1, 2, 3]
console.log(solution([10, 20, 30, 40, 50], [2, 1, 3])); // [30, 40]
console.log(solution([5, 6, 7, 8, 9], [3, 2, 4])); // [7]
console.log(solution([1, 2, 3, 4, 5, 6], [5, 2, 1])); // [2, 3]
