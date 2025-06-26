function solution(my_string, indices) {
  // Set으로 변환하여 빠른 검색 수행
  const indicesSet = new Set(indices);

  // 제거할 인덱스를 제외하고 문자열 구성
  return [...my_string].filter((_, idx) => !indicesSet.has(idx)).join("");
}

// 입출력 예 테스트
console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // "programmers"
