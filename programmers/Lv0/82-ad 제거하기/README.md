> [ad 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/181870)

### **문제 설명**

문자열 배열 `strArr`가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

---

### 제한사항

- 1 ≤ `strArr`의 길이 ≤ 1,000
  - 1 ≤ `strArr`의 원소의 길이 ≤ 20
  - `strArr`의 원소는 알파벳 소문자로 이루어진 문자열입니다.

---

### 입출력 예

| strArr                        | result                        |
| ----------------------------- | ----------------------------- |
| ["and","notad","abcd"]        | ["and","abcd"]                |
| ["there","are","no","a","ds"] | ["there","are","no","a","ds"] |

---

### 입출력 예 설명

입출력 예 #1

- 1번 인덱스의 문자열인 "notad"는 부분 문자열로 "ad"를 가집니다. 따라서 해당 문자열을 제거하고 나머지는 순서를 유지하여 ["and","abcd"]를 return 합니다.

입출력 예 #2

- "ad"가 부분 문자열로 들어간 문자열이 존재하지 않습니다. 따라서 원래 배열을 그대로 return 합니다.

---

```jsx
function solution(strArr) {
  return strArr.filter((str) => !str.includes("ad"));
}
```

---

### 코드설명

1. **`filter` 메서드**:
   - `filter`는 배열의 각 요소를 순회하며 조건에 맞는 요소만 포함하는 새로운 배열을 반환합니다.
   - 이 문제에서는 문자열에 "ad"가 포함되지 않은 요소를 조건으로 설정했습니다.
2. **`includes` 메서드**:
   - `str.includes("ad")`는 문자열 `str`에 "ad"라는 부분 문자열이 포함되어 있는지를 확인합니다.
   - "ad"가 포함되어 있다면 `true`를 반환하고, 포함되지 않으면 `false`를 반환합니다.
3. **조건 설정**:
   - `!str.includes("ad")`:
     - "ad"가 포함되지 않은 문자열만 반환하기 위해 `!` 연산자를 사용하여 조건을 반전시킵니다.
4. **결과 반환**:
   - `filter`를 통해 조건을 만족하는 문자열들로 이루어진 새로운 배열을 반환합니다.
