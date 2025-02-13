function solution(myString) {
  return myString.split("x").map((str) => str.length);
}

console.log(solution("oxooxoxxox")); // [1, 2, 1, 0, 1, 0]
