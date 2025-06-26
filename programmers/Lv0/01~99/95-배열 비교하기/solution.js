function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  }

  const sum1 = arr1.reduce((acc, num) => acc + num, 0);
  const sum2 = arr2.reduce((acc, num) => acc + num, 0);

  return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
}

console.log(solution([49, 13], [70, 11, 2])); // -1
