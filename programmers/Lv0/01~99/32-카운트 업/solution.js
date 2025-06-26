function solution(start_num, end_num) {
  const result = [];
  for (let i = start_num; i <= end_num; i++) {
    result.push(i); // i를 result 배열에 추가
  }
  return result;
}

console.log(solution(3, 10));
