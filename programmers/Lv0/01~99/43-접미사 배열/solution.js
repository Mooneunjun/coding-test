function solution(my_string) {
  return Array.from({ length: my_string.length }, (_, i) =>
    my_string.slice(i)
  ).sort();
}

console.log(solution("banana")); // [ 'a', 'ana', 'anana', 'banana', 'na', 'nana' ]
