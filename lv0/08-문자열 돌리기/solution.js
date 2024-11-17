// 문자열 돌리기
function solution(input) {
  const str = input[0];
  const rotated = [...str].join("\n");
  console.log(rotated);
}

solution(["abcde"]); // a\nb\nc\nd\ne
