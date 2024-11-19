// 문자열 겹쳐쓰가
function solution(my_string, overwrite_string, s) {
  let answer = [...my_string];
  answer.splice(s, overwrite_string.length, overwrite_string);

  return answer.join("");
}

console.log(solution("He11oWor1d", "lloWorl", 2)); // He11lloWor1d
