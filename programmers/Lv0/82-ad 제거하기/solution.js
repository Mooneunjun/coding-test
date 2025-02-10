function solution(strArr) {
  return strArr.filter((str) => !str.includes("ad"));
}

console.log(solution(["and", "notad", "abcd"])); // ["and","abcd"]
