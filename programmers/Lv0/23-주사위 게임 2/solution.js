function solution(a, b, c) {
  const sum = a + b + c; // 세 주사위 수의 합
  const sumOfSquares = a ** 2 + b ** 2 + c ** 2; // 세 수의 제곱 합
  const sumOfCubes = a ** 3 + b ** 3 + c ** 3; // 세 수의 세제곱 합

  // a, b, c가 모두 같은지 확인
  if (a === b && b === c) {
    return sum * sumOfSquares * sumOfCubes;
  }

  // a, b, c 중 정확히 두 수만 같은지 확인
  // 방법 1: 집합(set)을 이용해 유일한 값의 개수 확인
  // let uniqueCount = new Set([a,b,c]).size;
  // uniqueCount가 2라면 두 수만 같다는 의미

  // 방법 2: 조건문 직접 사용
  if (a === b || b === c || a === c) {
    return sum * sumOfSquares;
  }

  // 세 수 모두 다를 경우
  return sum;
}

console.log(solution(2, 6, 1)); // 출력: 9
console.log(solution(5, 3, 3)); // 출력: 473
console.log(solution(4, 4, 4)); // 출력: 110592
