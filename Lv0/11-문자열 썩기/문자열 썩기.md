> [문자열 섞기](https://school.programmers.co.kr/learn/courses/30/lessons/181942)

### **문제 설명**

길이가 같은 두 문자열 `str1`과 `str2`가 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

---

### 제한사항

- 1 ≤ `str1`의 길이 = `str2`의 길이 ≤ 10
  - `str1`과 `str2`는 알파벳 소문자로 이루어진 문자열입니다.

---

### 입출력 예

| str1    | str2    | result       |
| ------- | ------- | ------------ |
| "aaaaa" | "bbbbb" | "ababababab" |

---

```jsx
function solution(str1, str2) {
  let answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i]; // str1과 str2의 i번째 문자를 번갈아 추가
  }
  return answer;
}
```

### 코드 설명

1. **초기화**
   - `let answer = '';`는 결과를 저장할 빈 문자열을 초기화합니다.
2. **문자열 병합**
   - `for` 반복문을 사용하여 `str1`과 `str2`의 각 문자를 인덱스별로 순회합니다.
   - 반복문 조건은 `i = 0`부터 시작하여 `i < str1.length`가 될 때까지 실행합니다.
   - 각 반복에서 `str1[i]`와 `str2[i]`를 결합하여 `answer`에 추가합니다.예: `str1 = "aaaaa", str2 = "bbbbb"`일 경우:
     - `i = 0`: `answer = "ab"`
     - `i = 1`: `answer = "abab"`
     - `i = 2`: `answer = "ababab"`
     - `i = 3`: `answer = "abababab"`
     - `i = 4`: `answer = "ababababab"`
3. **결과 반환**
   - 모든 문자를 번갈아 추가한 후, `return answer;`로 결과 문자열을 반환합니다.
