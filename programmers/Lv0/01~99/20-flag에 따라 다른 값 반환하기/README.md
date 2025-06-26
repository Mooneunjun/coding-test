> [flag에 따라 다른 값 반환하기](https://school.programmers.co.kr/learn/courses/30/lessons/181933)

### **문제 설명**

두 정수 `a`, `b`와 boolean 변수 `flag`가 매개변수로 주어질 때, `flag`가 true면 `a` + `b`를 false면 `a` - `b`를 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1,000 ≤ `a`, `b` ≤ 1,000

---

### 입출력 예

| a   | b   | flag  | result |
| --- | --- | ----- | ------ |
| -4  | 7   | true  | 3      |
| -4  | 7   | false | -11    |

---

### 입출력 예

입출력 예 #1

- 예제 1번에서 `flag`가 true이므로 `a` + `b` = (-4) + 7 = 3을 return 합니다.

입출력 예 #2

- 예제 2번에서 `flag`가 false이므로 `a` - `b` = (-4) - 7 = -11을 return 합니다.

---

```jsx
function solution(a, b, flag) {
  return flag ? a + b : a - b;
}
```

### 코드 설명

1. **`flag` 값 확인**
   - `flag`는 `boolean` 타입으로, `true` 또는 `false` 값을 가집니다.
   - 삼항 연산자(`? :`)를 사용하여 `flag`의 값에 따라 조건을 처리합니다.
2. **`flag`가 `true`일 때**
   - `flag ? a + b` 부분이 실행되어 `a + b` 값을 반환합니다.
   - 예: `a = -4, b = 7, flag = true` → `return -4 + 7 = 3`.
3. **`flag`가 `false`일 때**
   - `flag ? a + b : a - b`에서 `a - b` 부분이 실행되어 `a - b` 값을 반환합니다.
   - 예: `a = -4, b = 7, flag = false` → `return -4 - 7 = -11`.
4. **결과 반환**
   - 삼항 연산자의 결과를 그대로 반환합니다.
