function solution(arr) {
  const stk = [];

  for (const num of arr) {
    if (stk.length === 0 || stk[stk.length - 1] !== num) {
      stk.push(num);
    } else {
      stk.pop();
    }
  }

  return stk.length ? stk : [-1];
}

console.log(solution([0, 1, 1, 1, 0])); // [0, 1, 0]
