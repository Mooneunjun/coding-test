> [간단한 논리 연산](https://school.programmers.co.kr/learn/courses/30/lessons/181917)

### **문제 설명**

boolean 변수 `x1`, `x2`, `x3`, `x4`가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.

- (`x1` ∨ `x2`) ∧ (`x3` ∨ `x4`)

---

### 입출력 예

| x1    | x2    | x3    | x4    | result |
| ----- | ----- | ----- | ----- | ------ |
| false | true  | true  | true  | true   |
| true  | false | false | false | false  |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `x1`, `x2`, `x3`, `x4`로 식을 계산하면 다음과 같습니다.
  (`x1` ∨ `x2`) ∧ (`x3` ∨ `x4`) ≡ (F ∨ T) ∧ (T ∨ T) ≡ T ∧ T ≡ T
  따라서 true를 return 합니다.

입출력 예 #2

- 예제 2번의 `x1`, `x2`, `x3`, `x4`로 식을 계산하면 다음과 같습니다.
  (`x1` ∨ `x2`) ∧ (`x3` ∨ `x4`) ≡ (T ∨ F) ∧ (F ∨ F) ≡ T ∧ F ≡ F
  따라서 false를 return 합니다.

---

- ∨과 ∧의 진리표는 다음과 같습니다.

| x   | y   | x ∨ y | x ∧ y |
| --- | --- | ----- | ----- |
| T   | T   | T     | T     |
| T   | F   | T     | F     |
| F   | T   | T     | F     |
| F   | F   | F     | F     |

---

```jsx
function solution(x1, x2, x3, x4) {
  // 논리 연산 계산
  return (x1 || x2) && (x3 || x4);
}
```

---

### 코드 설명

1. **논리 연산자 사용**:
   - **`||` (OR)**: 하나라도 `true`면 `true`를 반환.
   - **`&&` (AND)**: 모두 `true`일 때만 `true`를 반환.
   - 식 `(x1 ∨ x2) ∧ (x3 ∨ x4)`는 JavaScript에서 다음과 같이 표현됩니다:
     ```jsx
     (x1 || x2) && (x3 || x4);
     ```
2. **연산 순서**:
   - JavaScript에서는 논리 연산자 우선순위에 따라 **`||` (OR)**가 **`&&` (AND)**보다 먼저 계산됩니다.
   - 따라서 `(x1 || x2)`가 먼저 계산된 뒤, `(x3 || x4)`가 계산되고, 마지막으로 `&&` 연산이 수행됩니다.
3. **결과 반환**:
   - 계산 결과를 `return`하여 true/false 값을 반환합니다.
