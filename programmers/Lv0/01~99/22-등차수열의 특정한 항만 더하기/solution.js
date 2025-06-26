function solution(a, d, included) {
  let sum = 0;
  for (let i = 0; i < included.length; i++) {
    // i번째 인덱스에서의 항: a + i*d (i는 0부터 시작, 항 번호는 1부터)
    // included[i]가 true이면 해당 항을 sum에 추가
    if (included[i]) {
      sum += a + i * d;
    }
  }
  return sum;
}

console.log(solution(3, 4, [true, false, false, true, true]));
//출력: 37
