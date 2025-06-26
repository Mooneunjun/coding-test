> [카운트 다운](https://school.programmers.co.kr/learn/courses/30/lessons/181899)

### **문제 설명**

정수 `start_num`와 `end_num`가 주어질 때, `start_num`에서 `end_num`까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 0 ≤ `end_num` ≤ `start_num` ≤ 50

---

### 입출력 예

| start_num | end_num | result                    |
| --------- | ------- | ------------------------- |
| 10        | 3       | [10, 9, 8, 7, 6, 5, 4, 3] |

---

### 입출력 예 설명

입출력 예 #1

- 10부터 3까지 1씩 감소하는 수를 담은 리스트는 [10, 9, 8, 7, 6, 5, 4, 3]입니다.

---

```jsx
function solution(start_num, end_num) {
  // start_num부터 end_num까지 1씩 감소하는 배열 생성
  const result = [];
  for (let i = start_num; i >= end_num; i--) {
    result.push(i);
  }
  return result;
}

// 입출력 예 테스트
console.log(solution(10, 3)); // [10, 9, 8, 7, 6, 5, 4, 3]
```

### 코드 설명

1. **`result` 배열 초기화**:
   - 결과를 저장할 빈 배열 `result`를 선언합니다.
2. **반복문**:
   - `for` 루프를 사용하여 `start_num`에서 `end_num`까지 1씩 감소하며 순회합니다.
   - 반복 변수 `i`는 `start_num`부터 시작하고, 매 반복마다 `i--`로 값을 감소시킵니다.
   - 루프 조건 `i >= end_num`은 `i`가 `end_num` 이상일 때까지 반복합니다.
3. **`result.push(i)`**:
   - 각 반복에서 현재 값 `i`를 `result` 배열에 추가합니다.
4. **결과 반환**:
   - 반복이 종료되면 완성된 `result` 배열을 반환합니다.
