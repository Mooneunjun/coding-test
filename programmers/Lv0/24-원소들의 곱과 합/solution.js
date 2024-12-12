function solution(num_list) {
  const sum = num_list.reduce((acc, cur) => acc + cur, 0); // 모든 원소의 합
  const product = num_list.reduce((acc, cur) => acc * cur, 1); // 모든 원소의 곱

  // 모든 원소의 곱이 합의 제곱보다 작으면 1, 아니면 0
  return product < sum ** 2 ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
