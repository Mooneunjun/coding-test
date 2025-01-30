function solution(arr) {
  let x = 0; // 작업 반복 횟수를 저장하는 변수

  while (true) {
    const nextArr = arr.map((v) =>
      v >= 50 && v % 2 === 0 ? v / 2 : v < 50 && v % 2 !== 0 ? v * 2 + 1 : v
    ); // 조건에 따라 배열 변환

    if (arr.join(",") === nextArr.join(",")) {
      break; // 현재 배열과 변환된 배열이 동일하면 종료
    }

    arr = nextArr; // 변환된 배열로 업데이트
    x++; // 반복 횟수 증가
  }

  return x; // 변환이 멈춘 시점의 반복 횟수 반환
}

console.log(solution([1, 2, 3, 100, 99, 98])); // 5
