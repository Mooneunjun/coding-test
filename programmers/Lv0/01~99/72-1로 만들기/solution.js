function solution(num_list) {
  let totalOperations = 0; // 총 나누기 연산 횟수를 저장할 변수

  num_list.forEach((num) => {
    let count = 0; // 현재 숫자를 1로 만드는 데 필요한 연산 횟수
    while (num > 1) {
      if (num % 2 === 0) {
        num /= 2; // 짝수라면 반으로 나눔
      } else {
        num = (num - 1) / 2; // 홀수라면 1을 뺀 뒤 반으로 나눔
      }
      count++; // 연산 횟수 증가
    }
    totalOperations += count; // 총 연산 횟수에 추가
  });

  return totalOperations; // 모든 숫자를 1로 만드는 데 필요한 총 연산 횟수 반환
}

console.log(solution([12, 4, 15, 1, 14])); // 11
