> [코드 처리하기](https://school.programmers.co.kr/learn/courses/30/lessons/181932)

문자열 `code`가 주어집니다.

`code`를 앞에서부터 읽으면서 만약 문자가 "1"이면 `mode`를 바꿉니다. `mode`에 따라 `code`를 읽어가면서 문자열 `ret`을 만들어냅니다.

`mode`는 0과 1이 있으며, `idx`를 0 부터 `code의 길이 - 1` 까지 1씩 키워나가면서 `code[idx]`의 값에 따라 다음과 같이 행동합니다.

- `mode`가 0일 때
  - `code[idx]`가 "1"이 아니면 `idx`가 짝수일 때만 `ret`의 맨 뒤에 `code[idx]`를 추가합니다.
  - `code[idx]`가 "1"이면 `mode`를 0에서 1로 바꿉니다.
- `mode`가 1일 때
  - `code[idx]`가 "1"이 아니면 `idx`가 홀수일 때만 `ret`의 맨 뒤에 `code[idx]`를 추가합니다.
  - `code[idx]`가 "1"이면 `mode`를 1에서 0으로 바꿉니다.

문자열 `code`를 통해 만들어진 문자열 `ret`를 return 하는 solution 함수를 완성해 주세요.

단, 시작할 때 `mode`는 0이며, return 하려는 `ret`가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.

---

### 제한사항

- 1 ≤ `code`의 길이 ≤ 100,000
  - `code`는 알파벳 소문자 또는 "1"로 이루어진 문자열입니다.

---

### 입출력 예

| code          | result  |
| ------------- | ------- |
| "abc1abc1abc" | "acbac" |

---

### 입출력 예 설명

입출력 예 #1

- `code`의 각 인덱스 `i`에 따라 다음과 같이 `mode`와 `ret`가 변합니다.

| i   | code[i] | mode | ret     |
| --- | ------- | ---- | ------- |
| 0   | "a"     | 0    | "a"     |
| 1   | "b"     | 0    | "a"     |
| 2   | "c"     | 0    | "ac"    |
| 3   | "1"     | 1    | "ac"    |
| 4   | "a"     | 1    | "ac"    |
| 5   | "b"     | 1    | "acb"   |
| 6   | "c"     | 1    | "acb"   |
| 7   | "1"     | 0    | "acb"   |
| 8   | "a"     | 0    | "acba"  |
| 9   | "b"     | 0    | "acba"  |
| 10  | "c"     | 0    | "acbac" |

따라서 "acbac"를 return 합니다.

---

### 코드

```jsx
function solution(code) {
  let mode = 0; // 초기 mode는 0
  let ret = ""; // 결과 문자열 초기화

  for (let idx = 0; idx < code.length; idx++) {
    if (code[idx] === "1") {
      mode = 1 - mode; // mode를 0과 1로 전환
    } else {
      if (mode === 0 && idx % 2 === 0) {
        ret += code[idx]; // mode가 0이고 idx가 짝수일 때 추가
      } else if (mode === 1 && idx % 2 === 1) {
        ret += code[idx]; // mode가 1이고 idx가 홀수일 때 추가
      }
    }
  }

  return ret === "" ? "EMPTY" : ret; // ret이 빈 문자열이라면 "EMPTY" 반환
}
```

---

### 코드 설명

1. **초기 설정**
   - `mode`는 0으로 시작합니다.
   - 결과 문자열 `ret`은 빈 문자열로 초기화합니다.
2. **`code` 순회**
   - `for` 문을 사용하여 `code`의 각 문자를 순차적으로 확인합니다.
3. **조건 처리**
   - `code[idx] === "1"`:
     - `mode`를 전환합니다. `mode = 1 - mode`는 `0 → 1` 또는 `1 → 0`으로 전환합니다.
   - `mode === 0`:
     - `idx`가 짝수(`idx % 2 === 0`)일 때만 `ret`에 `code[idx]`를 추가합니다.
   - `mode === 1`:
     - `idx`가 홀수(`idx % 2 === 1`)일 때만 `ret`에 `code[idx]`를 추가합니다.
4. **결과 반환**
   - 반복문이 종료된 후, `ret`이 빈 문자열이면 `"EMPTY"`를 반환합니다.
   - 그렇지 않으면 `ret`을 반환합니다.
