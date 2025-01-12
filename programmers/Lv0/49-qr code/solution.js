function solution(q, r, code) {
  // 필터링하여 q로 나눈 나머지가 r인 문자를 추출하고 반환
  return [...code].filter((_, idx) => idx % q === r).join("");
}

// 입출력 예 테스트
console.log(solution(3, 1, "qjnwezgrpirldywt")); // "jerry"
console.log(solution(1, 0, "programmers")); // "programmers";
