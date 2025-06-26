function solution(my_string, is_prefix) {
  // my_string이 is_prefix로 시작하는지 확인
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

// 입출력 예 테스트
console.log(solution("banana", "ban")); // 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "abcd")); // 0
console.log(solution("banana", "bananan")); // 0;
