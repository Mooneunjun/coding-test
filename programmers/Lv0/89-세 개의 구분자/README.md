> [세 개의 구분자](https://school.programmers.co.kr/learn/courses/30/lessons/181862)

### **문제 설명**

임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.

예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.

문자열 `myStr`이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.

---

### 제한사항

- 1 ≤ `myStr`의 길이 ≤ 1,000,000
  - `myStr`은 알파벳 소문자로 이루어진 문자열 입니다.

---

### 입출력 예

| myStr                | result                    |
| -------------------- | ------------------------- |
| "baconlettucetomato" | ["onlettu", "etom", "to"] |
| "abcd"               | ["d"]                     |
| "cabab"              | ["EMPTY"]                 |

---

### 입출력 예 설명

입출력 예 #1

- 문제 설명의 예시와 같습니다.

입출력 예 #2

- "c" 이전에는 "a", "b", "c" 이외의 문자가 없습니다.
- "c" 이후에 문자열 "d"가 있으므로 "d"를 저장합니다.
- 따라서 ["d"]를 return 합니다.

입출력 예 #3

- "a", "b", "c" 이외의 문자가 존재하지 않습니다. 따라서 저장할 문자열이 없습니다.
- 따라서 ["EMPTY"]를 return 합니다.

---

```jsx
function solution(myStr) {
  return myStr.match(/[^a-c]+/g) || ["EMPTY"];
}

console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
console.log(solution("cabab")); // ["EMPTY"]
```

---

### 코드설명

1. **정규표현식 `[^a-c]+`**:
   - `[^a-c]`:
     - `a`, `b`, `c`를 제외한 문자를 매칭합니다.
     - `^`는 부정을 의미하며, 대괄호 안에서 사용하면 "해당 범위에 포함되지 않는 문자"를 나타냅니다.
   - `+`:
     - 한 번 이상 연속으로 나타나는 경우를 매칭합니다.
   - `/[^a-c]+/g`:
     - "a", "b", "c"가 아닌 문자들의 연속된 그룹을 모두 검색합니다(`g` 플래그: 전체 검색).
2. **`match` 메서드**:
   - `myStr.match(/[^a-c]+/g)`는 "a", "b", "c"가 아닌 연속된 문자열들을 배열로 반환합니다.
   - 매칭되는 항목이 없을 경우 `null`을 반환합니다.
3. **`|| ['EMPTY']`**:
   - `match`가 `null`을 반환하면, 결과를 `['EMPTY']`로 설정합니다.
   - 이를 통해 빈 배열 대신 "EMPTY" 문자열을 반환하도록 처리합니다.
4. **결과 반환**:
   - 매칭된 문자열 배열을 반환하거나, 매칭되지 않는 경우 `['EMPTY']`를 반환합니다.
