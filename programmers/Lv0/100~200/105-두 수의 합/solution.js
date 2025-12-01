// 두 수의 합
// 방법1 // 문자열 뒤집어서 계산
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

// 방법2 // BigInt 사용
function solution(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(solution("582", "734"));
console.log(solution("18446744073709551615", "287346502836570928366"));
console.log(solution("0", "0"));
