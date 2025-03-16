function solution(arr, n) {
    return arr.map((num, i) => (arr.length % 2 === 1 ? i % 2 === 0 : i % 2 === 1) ? num + n : num);
}

console.log(solution([49, 12, 100, 276, 33], 27)); // [76, 12, 127, 276, 60]
console.log(solution([444, 555, 666, 777], 100)); // [444, 655, 666, 877]
