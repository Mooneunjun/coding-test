function solution(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  const result = [];
  while (i >= 0 || j >= 0 || carry !== 0) {
    let _a = i >= 0 ? a.charCodeAt(i) - 48 : 0;
    let _b = j >= 0 ? b.charCodeAt(j) - 48 : 0;
    let sum = _a + _b + carry;

    result.push(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result.reverse().join("");
}
console.log(solution("18446", "287346"));
