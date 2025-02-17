function solution(myString, pat) {
  return [...myString]
    .map((v) => (v === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}

console.log(solution("ABBAA", "AABB")); // 출력: 1
