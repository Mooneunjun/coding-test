> [특정 문자열로 가장 긴 부분 문자열 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/181872)

### **문제 설명**

문자열 `myString`과 `pat`가 주어집니다. `myString`의 부분 문자열중 `pat`로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

---

### 제한사항

- 5 ≤ `myString` ≤ 20
- 1 ≤ `pat` ≤ 5
  - `pat`은 반드시 `myString`의 부분 문자열로 주어집니다.
- `myString`과 `pat`에 등장하는 알파벳은 대문자와 소문자를 구분합니다.

---

### 입출력 예

| myString   | pat  | result     |
| ---------- | ---- | ---------- |
| "AbCdEFG"  | "dE" | "AbCdE"    |
| "AAAAaaaa" | "a"  | "AAAAaaaa" |

---

### 입출력 예 설명

입출력 예 #1

- "AbCdEFG"에서 "dE"는 한 번 등장하며 처음부터 해당 위치까지 잘라내면 "AbCdE"가 됩니다. 따라서 이 문자열이 "dE"로 끝나는 가장 긴 문자열이며, "AbCdE"를 return 합니다.

입출력 예 #2

- "AAAAaaaa"에서 "a"는 총 네 번 등장하며 이 중 가장 마지막에 있는 위치까지 잘라내면 "AAAAaaaa"가 됩니다. 따라서 이 문자열이 "a"로 끝나는 가장 긴 문자열이며, "AAAAaaaa"를 return 합니다.

---

```jsx
function solution(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}
```

---

### 코드설명

1. **`lastIndexOf` 메서드**:
   - `myString.lastIndexOf(pat)`는 문자열 `myString`에서 `pat`이 마지막으로 등장하는 시작 인덱스를 반환합니다.
   - 예를 들어, `myString`이 "AbCdEFG"이고 `pat`이 "dE"라면, "dE"는 4번 인덱스에서 시작하므로 `lastIndexOf(pat)`는 `4`를 반환합니다.
   - 이 메서드는 문자열에서 `pat`이 마지막으로 등장하는 위치를 찾는 데 사용됩니다.
2. **`slice` 메서드**:
   - `myString.slice(start, end)`는 문자열의 `start` 인덱스부터 `end` 인덱스 직전까지의 부분 문자열을 추출합니다.
   - 이 문제에서는 `start`를 `0`으로 설정하고, `end`를 `lastIndexOf(pat) + pat.length`로 설정하여 `pat`으로 끝나는 부분 문자열을 추출합니다.
     - `lastIndexOf(pat)`는 `pat`이 시작하는 위치를 나타내므로, 여기에 `pat.length`를 더하면 `pat`의 끝 위치를 포함하는 범위를 지정할 수 있습니다.
3. **전체 동작**:
   - `lastIndexOf(pat)`로 `pat`의 마지막 시작 위치를 구합니다.
   - `pat.length`를 더하여 `pat`이 끝나는 위치를 포함한 범위를 계산합니다.
   - `slice(0, end)`를 사용하여 `myString`의 시작부터 `pat`이 끝나는 위치까지의 문자열을 추출합니다.
4. **결과 반환**:
   - 추출된 문자열, 즉 `pat`으로 끝나는 가장 긴 부분 문자열을 반환합니다.
