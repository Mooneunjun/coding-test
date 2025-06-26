function solution(numLog) {
  const operations = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  return numLog
    .slice(1) // 첫 번째 요소를 제외한 배열 생성
    .map((num, i) => operations[num - numLog[i]]) // 현재 값과 이전 값의 차이를 계산해 문자 매핑
    .join(""); // 배열의 문자들을 문자열로 변환
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // 출력: "wsdawsdassw"
