function solution(strArr) {
  return strArr.map((str, idx) =>
    idx % 2 === 0 ? str.toLowerCase() : str.toUpperCase()
  );
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"])); // [ 'aaa', 'BBB', 'ccc', 'DDD' ]
