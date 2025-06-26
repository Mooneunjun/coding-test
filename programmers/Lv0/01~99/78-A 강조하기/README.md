> [A 강조하기](https://school.programmers.co.kr/learn/courses/30/lessons/181874)

### **문제 설명**

문자열 `myString`이 주어집니다. `myString`에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

---

### 제한사항

- 1 ≤ `myString`의 길이 ≤ 20
  - `myString`은 알파벳으로 이루어진 문자열입니다.

---

### 입출력 예

| myString           | result             |
| ------------------ | ------------------ |
| "abstract algebra" | "AbstrAct AlgebrA" |
| "PrOgRaMmErS"      | "progrAmmers"      |

### 입출력 예 설명

입출력 예 #1

- 0번, 5번, 9번, 15번 인덱스의 "a"는 소문자이므로 전부 대문자로 고쳐줍니다.
- 다른 문자들은 전부 "a"가 아닌 소문자이므로 바꾸지 않습니다.
- 따라서 "AbstrAct AlgebrA"를 return 합니다.

입출력 예 #2

- 0번, 2번, 4번, 6번, 8번, 10번 인덱스의 문자들은 "A"가 아닌 대문자이므로 전부 소문자로 고쳐줍니다.
- 5번 인덱스의 "a"는 소문자이므로 대문자로 고쳐줍니다.
- 다른 문자들은 전부 "a"가 아닌 소문자이므로 바꾸지 않습니다.
- 따라서 "progrAmmers"를 return 합니다.

---

```jsx
function solution(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}
```

---

---

### 코드설명

1. **`toLowerCase` 메서드**:
   - `myString.toLowerCase()`는 입력 문자열의 모든 문자를 소문자로 변환합니다.
   - 이 단계에서 대문자 `A`와 다른 대문자 알파벳이 모두 소문자로 변경됩니다.
2. **`replaceAll` 메서드**:
   - `replaceAll('a', 'A')`는 문자열에서 모든 `a`를 `A`로 변환합니다.
   - 소문자 `a`만 대문자 `A`로 변경되며, 이미 소문자로 변환된 다른 알파벳은 영향을 받지 않습니다.
3. **결과 반환**:
   - 변환된 문자열을 반환합니다.
