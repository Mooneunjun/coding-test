function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}

console.log(solution("banana", "ana")); // 1
