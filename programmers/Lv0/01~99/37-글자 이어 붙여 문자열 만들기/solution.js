function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
  // map을 이용한 인덱스 문자 추출
  //.join("") 추출된 글자 배열을 문자열로 변환
}

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);

// // "programmers"
