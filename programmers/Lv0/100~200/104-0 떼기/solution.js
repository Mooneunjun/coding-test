// 방법 1 // 정규식 사용
function solution(n_str) {
  return n_str.replace(/^0+/, "");
}

// 방법 2 // 인덱스 사용
function solution(n_str) {
  let index = 0;

  while (index < n_str.length && n_str[index] === "0") {
    index++;
  }

  return n_str.slice(index);
}

// 방법 3 // 숫자로 변환 후 문자열로
function solution(n_str) {
  return String(Number(n_str));
}

console.log(solution("0010"));
console.log(solution("854020"));
