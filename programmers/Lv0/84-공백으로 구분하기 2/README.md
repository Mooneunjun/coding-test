> [공백으로 구분하기](https://school.programmers.co.kr/learn/courses/30/lessons/181868)

### **문제 설명**

단어가 공백 한 개 이상으로 구분되어 있는 문자열 `my_string`이 매개변수로 주어질 때, `my_string`에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- `my_string`은 영소문자와 공백으로만 이루어져 있습니다.
- 1 ≤ `my_string`의 길이 ≤ 1,000
- `my_string`의 맨 앞과 맨 뒤에도 공백이 있을 수 있습니다.
- `my_string`에는 단어가 하나 이상 존재합니다.

---

### 입출력 예

| my_string           | result               |
| ------------------- | -------------------- |
| " i    love  you"   | ["i", "love", "you"] |
| "    programmers  " | ["programmers"]      |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`은 " i love you"로 공백을 기준으로 단어를 나누면 "i", "love", "you" 3개의 단어가 있습니다. 따라서 ["i", "love", "you"]를 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`은 " programmers "로 단어는 "programmers" 하나만 있습니다. 따라서 ["programmers"]를 return 합니다.

---

```jsx
function solution(my_string) {
  return my_string.trim().split(/\s+/);
}
```

---

### 코드설명

1. **`trim` 메서드**:
   - `my_string.trim()`은 문자열의 앞뒤 공백을 제거합니다.
   - 문제에서 문자열의 맨 앞과 맨 뒤에 공백이 있을 수 있으므로, 이를 제거하여 불필요한 공백이 결과에 영향을 주지 않도록 처리합니다.
2. **`split` 메서드와 정규표현식 `\s+`**:
   - `split(/\s+/)`는 연속된 공백 문자를 하나의 구분자로 사용하여 문자열을 분리합니다.
   - `\s`는 공백 문자를 의미하며, `+`는 하나 이상의 공백을 의미합니다.
   - 이를 통해 공백이 연속적으로 등장해도 단어를 올바르게 추출할 수 있습니다.
3. **결과 반환**:
   - 공백을 제거하고 분리된 단어를 배열로 반환합니다.
