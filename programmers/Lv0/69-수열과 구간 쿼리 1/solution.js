function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      arr[i] += 1; // s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더함
    }
  });

  return arr; // 모든 쿼리를 처리한 후의 배열 반환
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);

//  [ 1, 3, 4, 4, 4 ]
