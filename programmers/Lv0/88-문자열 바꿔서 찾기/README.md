> [문자열 바꿔서 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/181864)

### **문제 설명**

문자 "A"와 "B"로 이루어진 문자열 `myString`과 `pat`가 주어집니다. `myString`의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 `pat`이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

---

### 제한사항

- 1 ≤ `myString`의 길이 ≤ 100
- 1 ≤ `pat`의 길이 ≤ 10
  - `myString`과 `pat`는 문자 "A"와 "B"로만 이루어진 문자열입니다.

---

### 입출력 예

| myString | pat    | result |
| -------- | ------ | ------ |
| "ABBAA"  | "AABB" | 1      |
| "ABAB"   | "ABAB" | 0      |

---

### 입출력 예 설명

입출력 예 #1

- "ABBAA"에서 "A"와 "B"를 서로 바꾸면 "BAABB"입니다. 여기에는 부분문자열 "AABB"가 있기 때문에 1을 return 합니다.

입출력 예 #2

- "ABAB"에서 "A"와 "B"를 서로 바꾸면 "BABA"입니다. 여기에는 부분문자열 "BABA"가 없기 때문에 0을 return 합니다.

※ 2023년 05월 15일 제한사항 및 테스트 케이스가 수정되었습니다. 기존에 제출한 코드가 통과하지 못할 수 있습니다.

---

```jsx
function solution(myString, pat) {
  return [...myString]
    .map((v) => (v === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}

console.log(solution("ABBAA", "AABB")); // 출력: 1
```

---

### 코드설명

1. **`[...myString]`**:
   - 문자열을 전개 연산자(`...`)로 분해하여 문자 배열을 생성합니다.
   - 예: `"ABBAA"` → `["A", "B", "B", "A", "A"]`.
2. **`map` 메서드**:
   - 배열의 각 요소(문자)를 순회하며 "A"는 "B"로, "B"는 "A"로 변환합니다.
   - 조건: `v === "A" ? "B" : "A"`.
3. **`join` 메서드**:
   - 변환된 문자 배열을 하나의 문자열로 결합합니다.
   - 예: `["B", "A", "A", "B", "B"].join('')` → `"BAABB"`.
4. **`includes` 메서드**:
   - 변환된 문자열에서 `pat`이 포함되어 있는지 확인합니다.
   - 포함되면 `true`, 포함되지 않으면 `false`를 반환합니다.
5. **삼항 연산자**:
   - `includes(pat)`의 결과가 `true`이면 `1`, 그렇지 않으면 `0`을 반환합니다.
