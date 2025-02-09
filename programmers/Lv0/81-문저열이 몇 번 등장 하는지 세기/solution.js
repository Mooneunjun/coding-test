function solution(myString, pat) {
  const regex = new RegExp(`(?=${pat})`, "g"); // 겹치는 패턴까지 검색하는 정규표현식
  return (myString.match(regex) || []).length;
}

console.log(solution("banana", "ana")); // 2
