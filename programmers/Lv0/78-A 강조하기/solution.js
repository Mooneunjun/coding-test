function solution(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}

console.log(solution("abstract algebra")); // "AbstrAct AlgebrA"
