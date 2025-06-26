// 첫번째 방법
function solution(names) {
  return names.filter((_, i) => i % 5 == 0);
}

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]) // [ 'nami', 'vex' ]
);

// 두번째 방법
function solution2(names) {
  let result = []; // 각 그룹의 첫 번째 사람의 이름을 저장할 배열

  // 5명씩 건너뛰며 그룹의 첫 번째 사람을 선택
  for (let i = 0; i < names.length; i += 5) {
    result.push(names[i]);
  }

  return result; // 결과 반환
}

console.log(
  solution2(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]) // [ 'nami', 'vex' ]
);
