// 문자열 겹쳐쓰가
function solution(my_string, overwrite_string, s) {
  let answer = [...my_string]; // 문자열을 배열로 변환
  answer.splice(s, overwrite_string.length, ...overwrite_string); // 특정 부분 삭제 후 덮어쓰기 (문자열 분해하여 삽입)
  return answer.join(""); // 배열을 다시 문자열로 변환하여 반환
}

console.log(solution("He11oWor1d", "lloWorl", 2)); // He11lloWor1d
console.log(solution("Program29b8UYP", "merS123", 7)); // ProgrammerS123
