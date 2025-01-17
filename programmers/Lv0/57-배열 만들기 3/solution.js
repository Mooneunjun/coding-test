function solution(arr, intervals) {
    // intervals에서 구간을 바로 추출
    const [[a, b], [c, d]] = intervals;

    // 두 구간을 슬라이싱하여 결합
    return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}

// 입출력 예 테스트
console.log(solution([1, 2, 3, 4, 5], [[1, 3], [0, 4]])); // [2, 3, 4, 1, 2, 3, 4, 5]