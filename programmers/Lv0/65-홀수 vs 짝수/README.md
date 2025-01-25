> [홀수 vs 짝수](https://school.programmers.co.kr/learn/courses/30/lessons/181887)

### **문제 설명**

정수 리스트 `num_list`가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

---

### 제한사항

- 5 ≤ `num_list`의 길이 ≤ 50
- 9 ≤ `num_list`의 원소 ≤ 9

---

### 입출력 예

| num_list           | result |
| ------------------ | ------ |
| [4, 2, 6, 1, 7, 6] | 17     |
| [-1, 2, 5, 6, 3]   | 8      |

---

### 입출력 예 설명

입출력 예 #1

- 홀수 번째 원소들의 합은 4 + 6 + 7 = 17, 짝수 번째 원소들의 합은 2 + 1 + 6 = 9 이므로 17을 return합니다.

입출력 예 #2

- 홀수 번째 원소들의 합은 -1 + 5 + 3 = 7, 짝수 번째 원소들의 합은 2 + 6 = 8 이므로 8을 return합니다.

---

```jsx
function solution(num_list) {
  let oddSum = 0; // 홀수 번째 원소들의 합
  let evenSum = 0; // 짝수 번째 원소들의 합

  // num_list를 순회하며 홀수/짝수 번째 원소의 합 계산
  num_list.forEach((num, idx) => {
    (idx + 1) % 2 === 1 ? (oddSum += num) : (evenSum += num);
  });

  // 홀수 번째 원소 합과 짝수 번째 원소 합 중 큰 값을 반환
  return Math.max(oddSum, evenSum);
}
```

---

### 코드설명

1. **변수 선언**:
   - `oddSum`: 배열에서 홀수 번째(1-based index 기준) 원소들의 합을 저장합니다.
   - `evenSum`: 배열에서 짝수 번째(1-based index 기준) 원소들의 합을 저장합니다.
2. **배열 순회**:
   - `forEach` 메서드를 사용해 배열의 각 원소를 순회합니다.
   - `idx + 1`을 사용해 1-based index 기준으로 계산합니다.
   - `(idx + 1) % 2 === 1`: 1-based index 기준으로 홀수 번째 원소를 구분하여 `oddSum`에 더합니다.
   - `(idx + 1) % 2 === 0`: 1-based index 기준으로 짝수 번째 원소를 구분하여 `evenSum`에 더합니다.
3. **최종 반환**:
   - `Math.max(oddSum, evenSum)`을 사용해 두 합 중 더 큰 값을 반환합니다.
