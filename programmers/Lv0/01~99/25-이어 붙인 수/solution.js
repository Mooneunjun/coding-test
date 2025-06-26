function solution(num_list) {
  let oddStr = ""; // 홀수만 이어 붙인 문자열
  let evenStr = ""; // 짝수만 이어 붙인 문자열

  for (const num of num_list) {
    num % 2 == 0 ? (evenStr += num) : (oddStr += num);
  }

  // 이어 붙인 두 수를 정수로 변환한 뒤 합산
  return Number(oddStr) + Number(evenStr);
}

console.log(solution([3, 4, 5, 2, 1])); // 출력: 393
console.log(solution([5, 7, 8, 3])); // 출력: 581
