function solution(arr) {
  return arr.map(
    (v) =>
      v >= 50 && v % 2 === 0 // 50 이상이면서 짝수인 경우
        ? v / 2
        : v < 50 && v % 2 !== 0 // 50 미만이면서 홀수인 경우
        ? v * 2
        : v // 조건에 해당하지 않는 경우 원래 값 유지
  );
}

console.log(solution([1, 2, 3, 100, 99, 98])); // [ 2, 2, 6, 50, 99, 49 ]
