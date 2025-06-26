function solution(my_string, s, e) {
  // 문자열을 세 부분으로 나눕니다: 뒤집지 않을 앞부분, 뒤집을 부분, 뒤집지 않을 뒷부분
  const prefix = my_string.slice(0, s);
  const reversed = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join(""); // e + 1을 사용하는 이유: slice는 종료 인덱스를 포함하지 않음
  const suffix = my_string.slice(e + 1);

  // 세 부분을 합쳐서 결과 문자열을 반환합니다
  return prefix + reversed + suffix;
}

console.log(solution("Progra21Sremm3", 6, 12)); // "ProgrammerS123"
