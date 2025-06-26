function solution(my_string, m, c) {
  // 결과 문자열을 추출하여 반환
  return [...my_string].filter((_, idx) => idx % m === c - 1).join("");
}

// 입출력 예 테스트
console.log(solution("ihrhbakrfpndopljhygc", 4, 2)); // "happy"
console.log(solution("programmers", 1, 1)); // "programmers";
