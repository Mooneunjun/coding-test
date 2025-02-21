> [n 번째 원소까지](https://school.programmers.co.kr/learn/courses/30/lessons/181889)

### **문제 설명**

정수 리스트 `num_list`와 정수 `n`이 주어질 때, `num_list`의 첫 번째 원소부터 `n` 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 2 ≤ `num_list`의 길이 ≤ 30
- 1 ≤ `num_list`의 원소 ≤ 9
- 1 ≤ `n` ≤ `num_list`의 길이 \_\_\_

### 입출력 예

| num_list        | n   | result    |
| --------------- | --- | --------- |
| [2, 1, 6]       | 1   | [2]       |
| [5, 2, 1, 7, 5] | 3   | [5, 2, 1] |

---

### 입출력 예 설명

입출력 예 #1

- [2, 1, 6]의 첫 번째 원소부터 첫 번째 원소까지의 모든 원소는 [2]입니다.

입출력 예 #2

- [5, 2, 1, 7, 5]의 첫 번째 원소부터 세 번째 원소까지의 모든 원소는 [5, 2, 1]입니다.

---

```jsx
function solution(num_list, n) {
  // num_list의 첫 번째 원소부터 n번째 원소까지 반환
  return num_list.slice(0, n);
}

// 입출력 예 테스트
console.log(solution([2, 1, 6], 1)); // [2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [5, 2, 1]
```

### 코드 설명

1. **`slice` 메서드**:
   - `num_list.slice(0, n)`는 배열 `num_list`에서 첫 번째 원소(인덱스 `0`)부터 `n`번째 원소 바로 앞까지 추출합니다.
   - 예를 들어:
     - `num_list = [2, 1, 6]`, `n = 1` → `slice(0, 1)` → `[2]`.
     - `num_list = [5, 2, 1, 7, 5]`, `n = 3` → `slice(0, 3)` → `[5, 2, 1]`.
2. **결과 반환**:
   - 추출된 배열을 반환합니다
