function solution(arr, queries) {
  for (let [i, j] of queries) {
    // i와 j의 위치를 스왑
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);
