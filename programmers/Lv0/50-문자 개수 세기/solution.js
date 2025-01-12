function solution(my_string) {
  // 모든 알파벳 (대문자 A-Z, 소문자 a-z)을 배열로 생성
  const allAlphabets =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

  // 알파벳 개수를 저장할 배열 초기화 (길이 52, 모두 0으로 채움)
  let arr = Array.from({ length: allAlphabets.length }, () => 0);

  // 문자열을 문자 배열로 변환 후 각 문자의 개수를 카운트
  [...my_string].forEach((v) => {
    // 현재 문자의 알파벳 배열 인덱스를 찾아 해당 위치의 값을 1 증가
    arr[allAlphabets.indexOf(v)]++;
  });

  // 각 알파벳 개수가 담긴 배열 반환
  return arr;
}

// 입출력 예 테스트
console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
