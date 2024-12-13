function solution(num_list) {
  const last = num_list[num_list.length - 1];
  const secondLast = num_list[num_list.length - 2];

  const newValue = last > secondLast ? last - secondLast : last * 2;

  return [...num_list, newValue]; // 원본 배열 불변성 유지
}

console.log(solution([2, 1, 6])); // [2, 1, 6, 4]
console.log(solution([5, 2, 1, 7, 5])); //  [5, 2, 1, 7, 5, 10]
