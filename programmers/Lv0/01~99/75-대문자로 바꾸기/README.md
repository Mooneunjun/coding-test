> [대문자로 바꾸기](https://school.programmers.co.kr/learn/courses/30/lessons/181877)

### **문제 설명**

알파벳으로 이루어진 문자열 `myString`이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

---

### 제한사항

- 1 ≤ `myString`의 길이 ≤ 100,000
  - `myString`은 알파벳으로 이루어진 문자열입니다.

---

### 입출력 예

| myString  | result    |
| --------- | --------- |
| "aBcDeFg" | "ABCDEFG" |
| "AAA"     | "AAA"     |

---

```jsx
function solution(myString) {
  return myString.toUpperCase(); // 문자열을 대문자로 변환하여 반환
}
```

---

### 코드설명

1. **`toUpperCase` 메서드 사용**:
   - `toUpperCase`는 문자열의 모든 문자를 대문자로 변환하는 메서드입니다.
   - `myString.toUpperCase()`는 입력 문자열 `myString`의 모든 소문자를 대문자로 변환한 새 문자열을 반환합니다.
   - 대문자는 변환되지 않고 그대로 유지됩니다.
2. **결과 반환**:
   - 변환된 문자열을 반환합니다.
