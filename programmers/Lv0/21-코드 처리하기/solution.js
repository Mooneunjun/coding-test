function solution(code) {
  let mode = 0; // 초기 mode는 0
  let ret = ""; // 결과 문자열 초기화

  for (let idx = 0; idx < code.length; idx++) {
    if (code[idx] === "1") {
      mode = 1 - mode; // mode를 0과 1로 전환
    } else {
      if (mode === 0 && idx % 2 === 0) {
        ret += code[idx]; // mode가 0이고 idx가 짝수일 때 추가
      } else if (mode === 1 && idx % 2 === 1) {
        ret += code[idx]; // mode가 1이고 idx가 홀수일 때 추가
      }
    }
  }

  return ret === "" ? "EMPTY" : ret; // ret이 빈 문자열이라면 "EMPTY" 반환
}
