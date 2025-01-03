> [**조건 문자열**](https://school.programmers.co.kr/learn/courses/30/lessons/181934)

### **문제 설명**

문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

- 두 수가 `n`과 `m`이라면
  - ">", "=" : `n` >= `m`
  - "<", "=" : `n` <= `m`
  - ">", "!" : `n` > `m`
  - "<", "!" : `n` < `m`

두 문자열 `ineq`와 `eq`가 주어집니다. `ineq`는 "<"와 ">"중 하나고, `eq`는 "="와 "!"중 하나입니다. 그리고 두 정수 `n`과 `m`이 주어질 때, `n`과 `m`이 `ineq`와 `eq`의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

---

### 제한 사항

- 1 ≤ `n`, `m` ≤ 100

---

### 입출력 예

| ineq | eq  | n   | m   | result |
| ---- | --- | --- | --- | ------ |
| "<"  | "=" | 20  | 50  | 1      |
| ">"  | "!" | 41  | 78  | 0      |

---

### 입출력 예 설명

입출력 예 #1

- 20 <= 50은 참이기 때문에 1을 return합니다.

입출력 예 #2

- 41 > 78은 거짓이기 때문에 0을 return합니다.

---

```jsx
function solution(ineq, eq, n, m) {
  if (ineq === ">" && eq === "=") return n >= m ? 1 : 0;
  if (ineq === "<" && eq === "=") return n <= m ? 1 : 0;
  if (ineq === ">" && eq === "!") return n > m ? 1 : 0;
  if (ineq === "<" && eq === "!") return n < m ? 1 : 0;
  return 0;
}
```

---

### 코드 설명

1. **조건별 비교**
   - `ineq`와 `eq`에 따라 네 가지 조건을 처리합니다:
     - `ineq === ">"`와 `eq === "="`: `n >= m`
     - `ineq === "<"`와 `eq === "="`: `n <= m`
     - `ineq === ">"`와 `eq === "!"`: `n > m`
     - `ineq === "<"`와 `eq === "!"`: `n < m`
2. **삼항 연산자를 사용한 참/거짓 반환**
   - 각 조건에서 `n`과 `m`을 비교하여 조건이 참이면 `1`, 거짓이면 `0`을 반환합니다.
3. **결과 반환**
   - 모든 조건이 만족되지 않는 경우 `0`을 반환합니다.

---

### 입출력 예 설명

### 입출력 예 #1

```jsx
(ineq = "<"), (eq = "="), (n = 20), (m = 50);
```

- 조건: `n <= m` → `20 <= 50`은 참이므로 결과는 `1`.

### 입출력 예 #2

```jsx
(ineq = ">"), (eq = "!"), (n = 41), (m = 78);
```

- 조건: `n > m` → `41 > 78`은 거짓이므로 결과는 `0`.

---

### 대안 코드: 객체를 사용한 처리

```jsx
function solution(ineq, eq, n, m) {
  const conditions = {
    ">=": (a, b) => a >= b,
    "<=": (a, b) => a <= b,
    ">!": (a, b) => a > b,
    "<!": (a, b) => a < b,
  };
  return conditions[ineq + eq](n, m) ? 1 : 0;
}
```

### 장점

- 조건 처리를 객체에 정의하여 가독성을 높이고, 유지보수를 용이하게 만듭니다.
