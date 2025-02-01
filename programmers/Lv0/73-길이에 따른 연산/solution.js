function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((sum, num) => sum + num, 0); // 리스트의 모든 원소의 합
  } else {
    return num_list.reduce((product, num) => product * num, 1); // 리스트의 모든 원소의 곱
  }
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
