function solution(arr, flag) {
  const X = []; // 결과 배열 초기화

  arr.forEach((num, i) => {
    if (flag[i]) {
      // flag[i]가 true이면 num을 num * 2번 추가
      X.push(...Array(num * 2).fill(num));
    } else {
      // flag[i]가 false이면 X에서 num개의 원소 제거
      X.splice(-num, num);
    }
  });

  return X;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false])); // [3, 3, 3, 3, 4, 4, 4, 4]
