function solution(arr, k) {
  const set = new Set(arr); // 중복 제거된 값들을 저장
  return set.size > k
    ? [...set].slice(0, k) // k개까지만 추출
    : [...set, ...Array(k - set.size).fill(-1)]; // 부족하면 -1 채우기
}

console.log(solution([0, 1, 1, 2, 2, 3], 3)); //[0, 1, 2]
