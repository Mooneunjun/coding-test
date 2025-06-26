> [원하는 문자열 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/181878)

### **문제 설명**

알파벳으로 이루어진 문자열 `myString`과 `pat`이 주어집니다. `myString`의 연속된 부분 문자열 중 `pat`이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

단, 알파벳 대문자와 소문자는 구분하지 않습니다.

---

### 제한사항

- 1 ≤ `myString`의 길이 ≤ 100,000
- 1 ≤ `pat`의 길이 ≤ 300
- `myString`과 `pat`은 모두 알파벳으로 이루어진 문자열입니다.

---

### 입출력 예

| myString  | pat     | return |
| --------- | ------- | ------ |
| "AbCdEfG" | "aBc"   | 1      |
| "aaAA"    | "aaaaa" | 0      |

### 입출력 예 설명

입출력 예 #1

- "AbCdEfG"의 0~2번 인덱스의 문자열은 "AbC"이며, 이는 `pat`인 "aBc"와 같습니다. 따라서 1을 return 합니다.

입출력 예 #2

- `myString`의 길이가 `pat`보다 더 짧기 때문에 `myString`의 부분 문자열 중 `pat`와 같은 문자열이 있을 수 없습니다. 따라서 0을 return 합니다.

---

```jsx
function solution(myString, pat) {
  // 대소문자를 구분하지 않으므로 모두 소문자로 변환
  myString = myString.toLowerCase();
  pat = pat.toLowerCase();

  // myString에 pat이 포함되어 있는지 확인
  return myString.includes(pat) ? 1 : 0;
}
```

---

### 코드설명

1. **문자열 대소문자 통일**:
   - `myString.toLowerCase()`와 `pat.toLowerCase()`를 사용하여 대소문자를 구분하지 않도록 문자열을 모두 소문자로 변환합니다.
   - 이는 문제의 조건에서 알파벳 대소문자를 구분하지 않는다고 명시되어 있기 때문에 필요합니다.
2. **부분 문자열 확인**:
   - `includes` 메서드를 사용하여 `myString`에 `pat`이 연속된 부분 문자열로 존재하는지 확인합니다.
   - `myString.includes(pat)`는 `true` 또는 `false`를 반환합니다.
3. **결과 반환**:
   - `includes`의 결과에 따라 `1`(존재함) 또는 `0`(존재하지 않음)을 반환합니다.
