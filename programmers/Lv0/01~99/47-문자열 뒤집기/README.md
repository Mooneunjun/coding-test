> [문자열 뒤집기](https://school.programmers.co.kr/learn/courses/30/lessons/181905)

### **문제 설명**

문자열 `my_string`과 정수 `s`, `e`가 매개변수로 주어질 때, `my_string`에서 인덱스 `s`부터 인덱스 `e`까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- `my_string`은 숫자와 알파벳으로만 이루어져 있습니다.
- 1 ≤ `my_string`의 길이 ≤ 1,000
- 0 ≤ `s` ≤ `e` < `my_string`의 길이

---

### 입출력 예

| my_string         | s   | e   | result            |
| ----------------- | --- | --- | ----------------- |
| "Progra21Sremm3"  | 6   | 12  | "ProgrammerS123"  |
| "Stanley1yelnatS" | 4   | 10  | "Stanley1yelnatS" |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`에서 인덱스 6부터 인덱스 12까지를 뒤집은 문자열은 "ProgrammerS123"이므로 "ProgrammerS123"를 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`에서 인덱스 4부터 인덱스 10까지를 뒤집으면 원래 문자열과 같은 "Stanley1yelnatS"이므로 "Stanley1yelnatS"를 return 합니다.

---

### 첫 번째 구현 방식:

```jsx
function solution(my_string, s, e) {
  // 문자열을 세 부분으로 나눕니다: 뒤집지 않을 앞부분, 뒤집을 부분, 뒤집지 않을 뒷부분
  const prefix = my_string.slice(0, s);
  const reversed = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join(""); // e + 1을 사용하는 이유: slice는 종료 인덱스를 포함하지 않음
  const suffix = my_string.slice(e + 1);

  // 세 부분을 합쳐서 결과 문자열을 반환합니다
  return prefix + reversed + suffix;
}
```

1. **`slice` 메서드**:
   - `slice(0, s)`는 `0`부터 `s` 이전까지의 문자열을 추출합니다. 이 부분은 뒤집지 않을 앞부분(`prefix`)에 해당합니다.
   - `slice(s, e + 1)`는 `s`부터 `e`까지의 문자열을 추출합니다. **`e + 1`의 이유**: `slice(start, end)` 메서드의 두 번째 인자는 종료(end) 인덱스를 포함하지 않으므로 `e`까지 포함하려면 반드시 `e + 1`을 지정해야 합니다.
   - `slice(e + 1)`는 `e` 이후의 문자열을 추출합니다. 이 부분은 뒤집지 않을 뒷부분(`suffix`)에 해당합니다.
2. **`split`, `reverse`, `join` 메서드**:
   - `split('')`으로 추출된 문자열을 문자 배열로 변환합니다.
   - `reverse()`로 문자 배열의 순서를 뒤집습니다.
   - `join('')`으로 다시 문자열로 결합하여 뒤집힌 문자열을 생성합니다.
3. **문자열 결합**:
   - `prefix`, `reversed`, `suffix`를 순서대로 결합하여 최종 결과 문자열을 반환합니다.
