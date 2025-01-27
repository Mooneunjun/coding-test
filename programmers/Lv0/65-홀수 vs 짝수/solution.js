function solution(num_list) {
  let oddSum = 0; // 홀수 번째 원소들의 합
  let evenSum = 0; // 짝수 번째 원소들의 합

  // num_list를 순회하며 홀수/짝수 번째 원소의 합 계산
  num_list.forEach((num, idx) => {
    (idx + 1) % 2 === 1 ? (oddSum += num) : (evenSum += num);
  });

  // 홀수 번째 원소 합과 짝수 번째 원소 합 중 큰 값을 반환
  return Math.max(oddSum, evenSum);
}

console.log(solution([4, 2, 6, 1, 7, 6]));
