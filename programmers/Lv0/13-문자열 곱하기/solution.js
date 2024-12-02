// 문자열 곱하기

function solution(my_string, k) {
  var answer = my_string.repeat(k); // my_string을 k번 반복
  return answer;
}

console.log(solution("string", 3)); // stringstringstring
