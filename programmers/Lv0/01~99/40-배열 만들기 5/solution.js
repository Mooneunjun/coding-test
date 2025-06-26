function solution(intStrs, k, s, l) {
  return intStrs
    .map((str) => parseInt(str.slice(s, s + l))) // 각 문자열의 s번 인덱스에서 시작하는 l길이 부분 문자열을 추출 후 정수 변환
    .filter((num) => num > k); // 변환한 정수 중 k보다 큰 값만 필터링
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
