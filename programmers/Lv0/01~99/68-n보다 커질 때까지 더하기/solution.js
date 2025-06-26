function solution(numbers, n) {
  let sum = 0; // 합을 저장할 변수 초기화
  let i = 0; // 배열 인덱스 초기화

  while (sum <= n && i < numbers.length) {
    sum += numbers[i]; // 현재 원소를 합산
    i++; // 다음 인덱스로 이동
  }

  return sum; // 합이 n보다 커졌을 때의 합 반환
}

console.log(solution([34, 5, 71, 29, 100, 34], 123)); // 139
console.log(solution([58, 44, 27, 10, 100], 139)); // 239
