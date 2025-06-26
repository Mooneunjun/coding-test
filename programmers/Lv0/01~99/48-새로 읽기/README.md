> [새로 읽기](https://school.programmers.co.kr/learn/courses/30/lessons/181904)

### **문제 설명**

문자열 `my_string`과 두 정수 `m`, `c`가 주어집니다. `my_string`을 한 줄에 `m` 글자씩 가로로 적었을 때 왼쪽부터 세로로 `c`번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- `my_string`은 영소문자로 이루어져 있습니다.
- 1 ≤ `m` ≤ `my_string`의 길이 ≤ 1,000
- `m`은 `my_string` 길이의 약수로만 주어집니다.
- 1 ≤ `c` ≤ `m`

---

### 입출력 예

| my_string              | m   | c   | result        |
| ---------------------- | --- | --- | ------------- |
| "ihrhbakrfpndopljhygc" | 4   | 2   | "happy"       |
| "programmers"          | 1   | 1   | "programmers" |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`을 한 줄에 4 글자씩 쓰면 다음의 표와 같습니다.

| 1열 | 2열 | 3열 | 4열 |
| --- | --- | --- | --- |
| i   | h   | r   | h   |
| b   | a   | k   | r   |
| f   | p   | n   | d   |
| o   | p   | l   | j   |
| h   | y   | g   | c   |

`2열에 적힌 글자를 세로로 읽으면 happy이므로 "happy"를 return 합니다.`

입출력 예 #2

- 예제 2번의 `my_string`은 `m`이 1이므로 세로로 "programmers"를 적는 것과 같고 따라서 1열에 적힌 글자를 세로로 읽으면 programmers입니다. 따라서 "programmers"를 return 합니다.

---

```jsx
function solution(my_string, m, c) {
  // 결과 문자열을 추출하여 반환
  return [...my_string].filter((_, idx) => idx % m === c - 1).join("");
}

// 입출력 예 테스트
console.log(solution("ihrhbakrfpndopljhygc", 4, 2)); // "happy"
console.log(solution("programmers", 1, 1)); // "programmers";
```

### 코드 설명

1. **`[...my_string]`**:
   - 문자열 `my_string`을 전개 연산자(`...`)를 사용해 문자 배열로 변환합니다.
   - 예: `"ihrhbakr"` → `['i', 'h', 'r', 'h', 'b', 'a', 'k', 'r']`
2. **`filter` 메서드**:
   - `filter`는 배열의 각 요소와 인덱스를 순회하면서 주어진 조건에 맞는 요소만 추출합니다.
   - 여기서 조건은 `(idx % m === c - 1)`입니다:
     - `idx % m`은 현재 문자가 몇 번째 열에 속하는지를 계산합니다.
     - `c - 1`은 1부터 시작하는 열 번호를 0 기반 배열 인덱스에 맞추기 위해 조정한 값입니다.
     - 따라서, 조건에 맞는 열의 문자만 추출됩니다.
3. **`join('')`**:
   - `filter`로 추출한 문자 배열을 다시 문자열로 결합합니다.
   - 예: `['h', 'a', 'p', 'p', 'y']` → `"happy"`
