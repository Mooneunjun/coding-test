> [수열과 구간 쿼리 3](https://school.programmers.co.kr/learn/courses/30/lessons/181924)

### **문제 설명**

정수 배열 `arr`와 2차원 정수 배열 `queries`이 주어집니다. `queries`의 원소는 각각 하나의 `query`를 나타내며, `[i, j]` 꼴입니다.

각 `query`마다 순서대로 `arr[i]`의 값과 `arr[j]`의 값을 서로 바꿉니다.

위 규칙에 따라 `queries`를 처리한 이후의 `arr`를 return 하는 solution 함수를 완성해 주세요.

---

### 제한사항

- 1 ≤ `arr`의 길이 ≤ 1,000
  - 0 ≤ `arr`의 원소 ≤ 1,000,000
- 1 ≤ `queries`의 길이 ≤ 1,000
  - 0 ≤ `i` < `j` < `arr`의 길이

---

### 입출력 예

| arr             | queries                | result          |
| --------------- | ---------------------- | --------------- |
| [0, 1, 2, 3, 4] | [[0, 3],[1, 2],[1, 4]] | [3, 4, 1, 0, 2] |

---

### 입출력 예 설명

입출력 예 #1

- 각 쿼리에 따라 `arr`가 다음과 같이 변합니다.

arr

---

[0, 1, 2, 3, 4]

---

[3, 1, 2, 0, 4]

---

[3, 2, 1, 0, 4]

---

[3, 4, 1, 0, 2]

---

- 따라서 [3, 4, 1, 0, 2]를 return 합니다.

---

```jsx
function solution(arr, queries) {
  for (let [i, j] of queries) {
    // i와 j의 위치를 스왑
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
```

---

### 코드 동작 방식 설명

1. **`queries` 순회**:
   - `queries` 배열의 각 요소는 `[i, j]` 형태입니다.
   - `for (let [i, j] of queries)`를 통해 `queries`의 각 `query`를 순차적으로 순회하며, `i`와 `j` 값을 추출합니다.
2. **스왑 연산**:
   - 각 `query`에서 주어진 인덱스 `i`와 `j`의 값을 스왑합니다.
   - **스왑 연산**은 배열 비구조화 할당을 사용하여 이루어집니다:
     ```jsx
     [arr[i], arr[j]] = [arr[j], arr[i]];
     ```
   - 이 코드는 `arr[j]` 값을 `arr[i]`에 저장하고, `arr[i]` 값을 `arr[j]`에 저장하는 역할을 합니다. 임시 변수를 사용할 필요가 없어 간결합니다.
3. **최종 배열 반환**:
   - 모든 `query`를 처리한 후, 업데이트된 배열 `arr`를 반환합니다.

---

### 스왑 연산의 작동 원리

스왑 연산:

```jsx
[arr[i], arr[j]] = [arr[j], arr[i]];
```

위 코드는 다음과 같이 동작합니다:

1. `[arr[j], arr[i]]`를 평가하여 새로운 배열 `[값1, 값2]`를 생성합니다.
2. 왼쪽 `[arr[i], arr[j]]`의 자리로 각각 값을 대입합니다.
   - `arr[i]`는 `arr[j]`의 값으로 업데이트.
   - `arr[j]`는 `arr[i]`의 값으로 업데이트.

---

### 입출력 예 설명

### 예제 #1

```jsx
arr = [0, 1, 2, 3, 4];
queries = [
  [0, 3],
  [1, 2],
  [1, 4],
];
```

1. 첫 번째 `query = [0, 3]`:
   - `arr[0]`와 `arr[3]` 스왑 → `arr = [3, 1, 2, 0, 4]`
2. 두 번째 `query = [1, 2]`:
   - `arr[1]`와 `arr[2]` 스왑 → `arr = [3, 2, 1, 0, 4]`
3. 세 번째 `query = [1, 4]`:
   - `arr[1]`와 `arr[4]` 스왑 → `arr = [3, 4, 1, 0, 2]`

최종 결과: `[3, 4, 1, 0, 2]`
