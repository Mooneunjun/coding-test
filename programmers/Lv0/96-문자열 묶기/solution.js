function solution(strArr) {
  const lengthCount = new Map(); // 문자열 길이별 개수를 저장할 Map

  // 각 문자열의 길이를 카운트
  for (const str of strArr) {
    const len = str.length;
    lengthCount.set(len, (lengthCount.get(len) || 0) + 1);
  }

  // 가장 큰 그룹 크기 찾기
  return Math.max(...lengthCount.values());
}

console.log(solution(1, ["a", "d"])); // 2
