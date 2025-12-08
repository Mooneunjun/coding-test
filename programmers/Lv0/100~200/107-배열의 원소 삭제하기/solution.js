// 배열의 원소 삭제하기

// 방법 1. Set 객체 사용
function solution(arr, delete_list) {
  const toDelete = new Set(delete_list);
  return arr.filter((value) => !toDelete.has(value));
}

// 방법 2. includes 메서드 사용
function solution(arr, delete_list) {
  return arr.filter((value) => !delete_list.includes(value));
}

console.log(solution([[293, 1000, 395, 678, 94]], [94, 777, 104, 1000, 1, 12])); // [293, 395, 678]
console.log(solution([[110, 66, 439, 785, 1]], [377, 823, 119, 43])); // [110, 66, 439, 785, 1]
