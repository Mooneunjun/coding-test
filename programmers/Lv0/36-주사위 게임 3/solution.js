function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  const counts = {};

  // 각 숫자의 빈도를 계산
  for (const num of dice) {
    counts[num] = (counts[num] || 0) + 1;
  }

  const uniqueNumbers = Object.keys(counts).map(Number);
  const frequencies = Object.values(counts);

  // 케이스별 점수 계산
  // 케이스별 점수 계산
  switch (frequencies.length) {
    case 1:
      // 네 주사위 숫자가 모두 같은 경우
      return 1111 * uniqueNumbers[0];

    case 2:
      if (frequencies.includes(3)) {
        // 세 주사위 숫자가 같고 나머지 하나가 다른 경우
        const p = uniqueNumbers.find((num) => counts[num] === 3);
        const q = uniqueNumbers.find((num) => counts[num] === 1);
        return (10 * p + q) ** 2;
      } else {
        // 두 쌍의 주사위가 같은 경우
        const [p, q] = uniqueNumbers;
        return (p + q) * Math.abs(p - q);
      }

    case 3:
      // 한 쌍의 주사위가 같고 나머지 두 숫자가 다른 경우
      const [q, r] = uniqueNumbers.filter((num) => counts[num] === 1);
      return q * r;

    case 4:
      // 네 주사위 숫자가 모두 다른 경우
      return Math.min(...uniqueNumbers);
  }
}

console.log(solution(2, 2, 2, 2)); // 2222
console.log(solution(4, 1, 4, 4)); // 1681
console.log(solution(6, 3, 3, 6)); // 27
console.log(solution(2, 5, 2, 6)); // 30
console.log(solution(6, 4, 2, 5)); // 2
