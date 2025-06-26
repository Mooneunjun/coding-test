// 문자 리스트를 문자열로 변환하기

function solution(arr) {
  let answer = arr.join(""); // 배열의 요소를 하나의 문자열로 이어 붙임
  return answer;
}

console.log(solution(["a", "b", "c"])); // abc
