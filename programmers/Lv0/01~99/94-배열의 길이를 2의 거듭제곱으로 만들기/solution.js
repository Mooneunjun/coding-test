function solution(arr) {
  const length = arr.length;
  const targetLength = 2 ** Math.ceil(Math.log2(length)); // 가장 가까운 2의 거듭제곱 계산
  return [...arr, ...Array(targetLength - length).fill(0)]; // 부족한 부분 0으로 채우기
}

console.log(solution([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 0, 0]
