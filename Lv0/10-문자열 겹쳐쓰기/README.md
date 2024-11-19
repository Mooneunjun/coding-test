> [문자열 겹쳐쓰기](https://school.programmers.co.kr/learn/courses/30/lessons/181943)

### **문제 설명**

문자열 `my_string`, `overwrite_string`과 정수 `s`가 주어집니다. 문자열 `my_string`의 인덱스 `s`부터 `overwrite_string`의 길이만큼을 문자열 `overwrite_string`으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- `my_string`와 `overwrite_string`은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ `overwrite_string`의 길이 ≤ `my_string`의 길이 ≤ 1,000
- 0 ≤ `s` ≤ `my_string`의 길이 - `overwrite_string`의 길이

---

### 입출력 예

| my_string        | overwrite_string | s   | result           |
| ---------------- | ---------------- | --- | ---------------- |
| "He11oWor1d"     | "lloWorl"        | 2   | "HelloWorld"     |
| "Program29b8UYP" | "merS123"        | 7   | "ProgrammerS123" |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`에서 인덱스 2부터 `overwrite_string`의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`에서 인덱스 7부터 `overwrite_string`의 길이만큼에 해당하는 부분은 "29b8UYP"이고 이를 "merS123"로 바꾼 "ProgrammerS123"를 return 합니다.

---

```jsx
function solution(my_string, overwrite_string, s) {
  let answer = [...my_string];
  answer.splice(s, overwrite_string.length, overwrite_string);

  return answer.join("");
}
```

### 코드 설명

1. **문자열을 배열로 변환**
   - `let answer = [...my_string];`는 `my_string`을 문자 하나씩 나누어 배열로 변환합니다.예: `"He11oWor1d"` → `['H', 'e', '1', '1', 'o', 'W', 'o', 'r', '1', 'd']`
2. **배열의 특정 부분 대체**
   - `answer.splice(s, overwrite_string.length, overwrite_string);`는 배열의 인덱스 `s`부터 `overwrite_string.length`만큼의 요소를 삭제하고, 그 자리에 `overwrite_string`을 삽입합니다.예: `s = 2`, `overwrite_string = "lloWorl"`일 때:`['H', 'e', '1', '1', 'o', 'W', 'o', 'r', '1', 'd']` → `['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']`
3. **배열을 문자열로 변환**
   - `answer.join('');`를 사용하여 배열을 다시 문자열로 변환합니다.예: `['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']` → `"HelloWorld"`
4. **결과 반환**
   - 최종적으로 대체된 문자열을 반환합니다.예: `"HelloWorld"`
