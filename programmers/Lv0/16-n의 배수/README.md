> [n의 배수](https://school.programmers.co.kr/learn/courses/30/lessons/181937)

### **문제 설명**

정수 `num`과 `n`이 매개 변수로 주어질 때, `num`이 `n`의 배수이면 1을 return `n`의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 2 ≤ `num` ≤ 100
- 2 ≤ `n` ≤ 9

---

### 입출력 예

| num | n   | result |
| --- | --- | ------ |
| 98  | 2   | 1      |
| 34  | 3   | 0      |

---

### 입출력 예 설명

입출력 예 #1

- 98은 2의 배수이므로 1을 return합니다.

입출력 예 #2

- 32는 3의 배수가 아니므로 0을 return합니다.

---

```jsx
function solution(num, n) {
  return num % n === 0 ? 1 : 0; // num이 n의 배수이면 1, 아니면 0 반환
}
```

---

### 코드 설명

1. **`num % n` 연산**
   - `%` 연산자는 나머지를 계산합니다.
   - `num % n === 0` 조건은 `num`이 `n`으로 나누어떨어지는지 확인합니다.
     - `true`이면 `num`은 `n`의 배수입니다.
     - `false`이면 `num`은 `n`의 배수가 아닙니다.
2. **삼항 연산자를 사용한 조건 처리**
   - `num % n === 0 ? 1 : 0`
     - 조건이 참이면 `1`을 반환합니다.
     - 조건이 거짓이면 `0`을 반환합니다.

---

### 입출력 예 설명

### 입출력 예 #1

```jsx
(num = 98), (n = 2);
```

- 계산 과정: `98 % 2 = 0`
- 조건: `98 % 2 === 0` → 참(`true`)
- 결과: `1`

### 입출력 예 #2

```jsx
(num = 34), (n = 3);
```

- 계산 과정: `34 % 3 = 1`
- 조건: `34 % 3 === 0` → 거짓(`false`)
- 결과: `0`
