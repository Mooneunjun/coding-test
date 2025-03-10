> [배열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/181901)

### **문제 설명**

정수 `n`과 `k`가 주어졌을 때, 1 이상 `n`이하의 정수 중에서 `k`의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

---

### 제한사항

- 1 ≤ `n` ≤ 1,000,000
- 1 ≤ `k` ≤ min(1,000, n)

---

### 입출력 예

| n   | k   | result      |
| --- | --- | ----------- |
| 10  | 3   | [3, 6, 9]   |
| 15  | 5   | [5, 10, 15] |

---

### 입출력 예 설명

입출력 예 #1

- 1 이상 10 이하의 3의 배수는 3, 6, 9 이므로 [3, 6, 9]를 return 합니다.

입출력 예 #2

- 1 이상 15 이하의 5의 배수는 5, 10, 15 이므로 [5, 10, 15]를 return 합니다.

---

```jsx
function solution(n, k) {
  return Array.from({ length: ~~(n / k) }, (_, i) => (i + 1) * k);
}

// 입출력 예 테스트
console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]
```

### 코드 설명

1. **`Array.from`으로 배열 생성**:
   - `Array.from({ length: ~~(n / k) })`:
     - `length`: 배열의 길이를 설정합니다.
     - `~~(n / k)`: `n`을 `k`로 나눈 몫을 계산하여 배열의 길이를 설정합니다. 이는 `k`의 배수가 몇 개인지 계산하는 역할을 합니다.
       - 예: `n = 10, k = 3` → `10 / 3 = 3.33` → `~~(10 / 3) = 3` → 배열 길이: `3`.
2. **`(_, i) => (i + 1) * k`**:
   - 배열의 각 요소를 계산하는 함수입니다.
   - `_`는 배열의 값(초기에는 모두 `undefined`이며, 사용하지 않으므로 `_`로 표시).
   - `i`는 현재 인덱스(0부터 시작).
   - `(i + 1) * k`:
     - 인덱스 `i`를 1부터 시작하도록 조정하고, 이를 `k`와 곱하여 `k`의 배수를 생성합니다.
     - 예:
       - `i = 0` → `(0 + 1) * 3 = 3`
       - `i = 1` → `(1 + 1) * 3 = 6`
       - `i = 2` → `(2 + 1) * 3 = 9`
3. **결과 반환**:
   - `Array.from`에서 생성된 배열을 반환합니다.
