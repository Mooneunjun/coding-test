// 문제: 대소문자 바꿔서 출력하기

function solution(input) {
  const str = input[0];
  const result = [...str]
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
  console.log(result);
}

solution(["aBcDeFg"]); // AbCdEfG
