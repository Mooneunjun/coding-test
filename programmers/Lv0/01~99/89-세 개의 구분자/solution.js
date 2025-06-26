function solution(myStr) {
  return myStr.match(/[^a-c]+/g) || ["EMPTY"];
}

console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
console.log(solution("cabab")); // ["EMPTY"]
