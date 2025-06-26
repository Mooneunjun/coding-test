function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
      // stk가 비었거나 마지막 원소가 arr[i]보다 작으면 추가
      stk.push(arr[i]);
      i++;
    } else {
      // stk의 마지막 원소가 arr[i]보다 크거나 같으면 제거
      stk.pop();
    }
  }

  return stk;
}

console.log(solution([1, 4, 2, 5, 3])); // 출력 [1,2,3]
