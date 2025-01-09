> [문자열의 뒤의 n 글자](https://school.programmers.co.kr/learn/courses/30/lessons/181910)

### **문제 설명**

문자열 `my_string`과 정수 `n`이 매개변수로 주어질 때, `my_string`의 뒤의 `n`글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- `my_string`은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ `my_string`의 길이 ≤ 1,000
- 1 ≤ `n` ≤ `my_string`의 길이

---

### 입출력 예

| my_string        | n   | result        |
| ---------------- | --- | ------------- |
| "ProgrammerS123" | 11  | "grammerS123" |
| "He110W0r1d"     | 5   | "W0r1d"       |

---

### 입출력 예

입출력 예 #1

- 예제 1번의 `my_string`에서 뒤의 11글자는 "grammerS123"이므로 이 문자열을 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`에서 뒤의 5글자는 "W0r1d"이므로 이 문자열을 return 합니다.

---

```jsx
function solution(my_string, n) {
  return my_string.slice(-n);
}
```

---

### **코드 설명**

### **1. `slice` 메서드 사용**

```jsx
my_string.slice(-n);
```

- **목적**:
  - 문자열 `my_string`의 뒤에서부터 `n`글자를 추출합니다.
- **작동 방식**:
  - `slice(start, end)` 메서드는 `start`부터 `end` 직전까지의 문자열을 반환합니다.
  - `start`가 음수인 경우, 문자열의 끝에서부터의 인덱스를 의미합니다.
    - 예: `slice(-n)`는 문자열의 끝에서 `n`번째 위치부터 끝까지 추출.

---

### **예제 동작**

1. **입력 1**

   ```jsx
   my_string = "ProgrammerS123";
   n = 11;
   ```

   - `my_string.slice(-11)`:
     - 문자열의 끝에서부터 11글자를 추출.
     - 결과: `"grammerS123"`.

2. **입력 2**

   ```jsx
   my_string = "He110W0r1d";
   n = 5;
   ```

   - `my_string.slice(-5)`:
     - 문자열의 끝에서부터 5글자를 추출.
     - 결과: `"W0r1d"`.
