function solution(my_string, n) {
  return my_string.slice(-n);
}

console.log(solution("ProgrammerS123", 11)); // "grammerS123"
console.log(solution("He110W0r1d", 5)); // "W0r1d"
