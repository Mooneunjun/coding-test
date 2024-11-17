// 문자열 반복해서 출력하기

function solution(input) {
  const str = input[0];
  const n = Number(input[1]);
  console.log(str.repeat(n));
}

solution(["string", "5"]); // stringstringstringstringstring
