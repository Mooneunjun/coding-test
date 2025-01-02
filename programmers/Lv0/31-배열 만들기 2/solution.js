function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    // 숫자를 문자열로 변환하여 모든 문자가 "0" 또는 "5"인지 확인
    const str = i.toString();
    if ([...str].every((char) => char === "0" || char === "5")) {
      result.push(i);
    }
  }

  // result 배열이 비어 있으면 [-1] 반환, 그렇지 않으면 result 반환
  return result.length === 0 ? [-1] : result;
}

console.log(solution(5, 555));
console.log(solution(10, 20));
