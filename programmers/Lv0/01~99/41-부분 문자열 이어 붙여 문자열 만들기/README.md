> [부분 문자열 이러 붙여 문자열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/181911)

### **문제 설명**

길이가 같은 문자열 배열 `my_strings`와 이차원 정수 배열 `parts`가 매개변수로 주어집니다. `parts[i]`는 [s, e] 형태로, `my_string[i]`의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 `my_strings`의 원소의 `parts`에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `my_strings`의 길이 = `parts`의 길이 ≤ 100
- 1 ≤ `my_strings`의 원소의 길이 ≤ 100
- `parts[i]`를 [s, e]라 할 때, 다음을 만족합니다.
  - 0 ≤ s ≤ e < `my_strings[i]`의 길이

---

### 입출력 예

| my_strings                                            | parts                            | result        |
| ----------------------------------------------------- | -------------------------------- | ------------- |
| ["progressive", "hamburger", "hammer", "ahocorasick"] | [[0, 4], [1, 2], [3, 5], [7, 7]] | "programmers" |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 입력을 보기 좋게 표로 나타내면 다음과 같습니다.

| i   | my_strings[i] | parts[i] | 부분 문자열 |
| --- | ------------- | -------- | ----------- |
| 0   | "progressive" | [0, 4]   | "progr"     |
| 1   | "hamburger”   | [1, 2]   | "am"        |
| 2   | "hammer"      | [3, 5]   | "mer"       |
| 3   | "ahocorasick" | [7, 7]   | "s"         |

`각 부분 문자열을 순서대로 이어 붙인 문자열은 "programmers"입니다. 따라서 "programmers"를 return 합니다.`

---

```jsx
function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => my_strings[i].slice(s, e + 1)) // 각 문자열의 부분 문자열을 추출
    .join(""); // 추출한 부분 문자열들을 이어 붙임
}
```

---

### **코드 설명**

### **1. `parts` 배열 순회**

```jsx
.map(([s, e], i) => my_strings[i].slice(s, e + 1))

```

- **목적**:
  - `parts` 배열의 각 `[s, e]`에 따라 `my_strings`의 각 문자열에서 지정된 부분 문자열을 추출.
- **작동 방식**:
  - `parts`의 각 요소 `[s, e]`는 시작 인덱스 `s`와 끝 인덱스 `e`를 의미.
  - `my_strings[i]`에서 `slice(s, e + 1)`로 부분 문자열을 추출.
  - `slice` 함수는 문자열에서 `s`부터 `e`까지의 구간을 추출.
- **예제**:
  - `my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"]`
  - `parts = [[0, 4], [1, 2], [3, 5], [7, 7]]`.
  - 동작 과정:
    - `[0, 4]` → `"progressive".slice(0, 5)` → `"progr"`.
    - `[1, 2]` → `"hamburger".slice(1, 3)` → `"am"`.
    - `[3, 5]` → `"hammer".slice(3, 6)` → `"mer"`.
    - `[7, 7]` → `"ahocorasick".slice(7, 8)` → `"s"`.

---

### **2. 추출한 부분 문자열을 이어 붙임**

```jsx
.join("")

```

- **목적**:
  - `map`을 통해 추출한 부분 문자열들을 하나의 문자열로 결합.
- **작동 방식**:
  - `join("")`은 배열 요소를 공백 없이 이어 붙임.
  - 예: `["progr", "am", "mer", "s"].join("")` → `"programmers"`.

---

### **코드 실행 예**

### **입력**

```jsx
my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"];
parts = [
  [0, 4],
  [1, 2],
  [3, 5],
  [7, 7],
];
```

### **단계별 동작**

1. **`map`으로 각 부분 문자열 추출**:
   - `[0, 4]`: `"progressive".slice(0, 5)` → `"progr"`.
   - `[1, 2]`: `"hamburger".slice(1, 3)` → `"am"`.
   - `[3, 5]`: `"hammer".slice(3, 6)` → `"mer"`.
   - `[7, 7]`: `"ahocorasick".slice(7, 8)` → `"s"`.
   - 결과: `["progr", "am", "mer", "s"]`.
2. **`join`으로 문자열 결합**:
   - `["progr", "am", "mer", "s"].join("")` → `"programmers"`.

### **출력**

```jsx
"programmers";
```
