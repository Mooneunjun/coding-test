function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => my_strings[i].slice(s, e + 1)) // 각 문자열의 부분 문자열을 추출
    .join(""); // 추출한 부분 문자열들을 이어 붙임
}

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
