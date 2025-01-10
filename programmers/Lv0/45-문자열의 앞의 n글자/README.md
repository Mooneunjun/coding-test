> [문자열의 앞의 n글자](https://school.programmers.co.kr/learn/courses/30/lessons/181907)

### **문제 설명**

문자열 `my_string`과 정수 `n`이 매개변수로 주어질 때, `my_string`의 앞의 `n`글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- `my_string`은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ `my_string`의 길이 ≤ 1,000
- 1 ≤ `n` ≤ `my_string`의 길이

---

### 입출력 예

| my_string        | n   | result        |
| ---------------- | --- | ------------- |
| "ProgrammerS123" | 11  | "ProgrammerS" |
| "He110W0r1d"     | 5   | "He110"       |

---

### 입출력 예

입출력 예 #1

- 예제 1번의 `my_string`에서 앞의 11글자는 "ProgrammerS"이므로 이 문자열을 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`에서 앞의 5글자는 "He110"이므로 이 문자열을 return 합니다.

---

```jsx
function solution(my_string, n) {
  return my_string.slice(0, n);
}
```

---

### **코드 설명**

### **1. `slice` 메서드 사용**

- **목적**:
  - 문자열 `my_string`의 앞에서부터 `n`개의 글자를 추출합니다.
- **작동 방식**:
  - `my_string.slice(0, n)`:
    - 문자열의 **시작 인덱스**가 `0`, **끝 인덱스**가 `n`인 부분 문자열을 반환.
    - `slice` 메서드는 끝 인덱스 `n`의 위치는 포함하지 않습니다.
    - 입력이 제한사항을 만족하므로 `n`이 항상 유효한 값임을 보장.

---

### **예제 동작**

### **입력 1**

```jsx
solution("ProgrammerS123", 11);
```

- `my_string = "ProgrammerS123"`, `n = 11`.
- `my_string.slice(0, 11)` → `"ProgrammerS"`.

### **입력 2**

```jsx
solution("He110W0r1d", 5);
```

- `my_string = "He110W0r1d"`, `n = 5`.
- `my_string.slice(0, 5)` → `"He110"`.
