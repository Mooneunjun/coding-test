function solution(myString) {
  return myString
    .match(/[^x]+/g) // "x"를 제외한 연속된 문자열 추출
    .sort(); // 사전순 정렬
}

console.log(solution("axbxcxdx")); //["a","b","c","d"]
