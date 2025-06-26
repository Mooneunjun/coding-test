> [문자열 여러 번 뒤집기](https://school.programmers.co.kr/learn/courses/30/lessons/181913)

### **문제 설명**

문자열 `my_string`과 이차원 정수 배열 `queries`가 매개변수로 주어집니다. `queries`의 원소는 [s, e] 형태로, `my_string`의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. `my_string`에 `queries`의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- `my_string`은 영소문자로만 이루어져 있습니다.
- 1 ≤ `my_string`의 길이 ≤ 1,000
- `queries`의 원소는 [s, e]의 형태로 0 ≤ s ≤ e < `my_string`의 길이를 만족합니다.
- 1 ≤ `queries`의 길이 ≤ 1,000

---

### 입출력 예

| my_string     | queries                           | result        |
| ------------- | --------------------------------- | ------------- |
| "rermgorpsam" | [[2, 3], [0, 7], [5, 9], [6, 10]] | "programmers" |

---

### 입출력 예 설명

- 예제 1번의 `my_string`은 "rermgorpsam"이고 주어진 `queries`를 순서대로 처리하면 다음과 같습니다.

|queries|my_string|

|---|---|

||"rermgorpsam"|

|[2, 3]|"remrgorpsam"|

|[0, 7]|"progrmersam"|

|[5, 9]|"prograsremm"|

|[6, 10]|"programmers"|

`따라서 "programmers"를 return 합니다.`

---

```jsx
function solution(my_string, queries) {
  let str = [...my_string]; // 문자열을 배열로 변환

  queries.forEach(([start, end]) => {
    // 주어진 구간을 뒤집고 배열에 반영
    const reversedPart = str.slice(start, end + 1).reverse();
    str.splice(start, reversedPart.length, ...reversedPart);
  });

  return str.join(""); // 배열을 문자열로 변환하여 반환
}
```

---

### **코드 설명**

### **1. 문자열을 배열로 변환**

```jsx
let str = [...my_string];
```

- **목적**:
  - 문자열은 불변(immutable) 속성을 가지므로 특정 구간의 수정이 어렵습니다.
  - 배열로 변환하면 특정 구간의 요소를 손쉽게 수정할 수 있습니다.
- **작동 방식**:
  - 스프레드 연산자 `...`를 사용해 문자열의 각 문자를 배열의 요소로 변환.
  - 예:
    - `my_string = "rermgorpsam"`
    - `str = ["r", "e", "r", "m", "g", "o", "r", "p", "s", "a", "m"]`.

---

### **2. 각 쿼리 처리**

```jsx
queries.forEach(([start, end]) => {
  const reversedPart = str.slice(start, end + 1).reverse();
  str.splice(start, reversedPart.length, ...reversedPart);
});
```

1. **쿼리를 순회하며 처리**:
   - `forEach`를 사용하여 `queries` 배열의 각 `[start, end]` 구간을 순서대로 처리.
   - `start`와 `end`는 뒤집어야 할 구간의 시작과 끝 인덱스를 의미.
2. **구간 추출 및 뒤집기**:

   ```jsx
   const reversedPart = str.slice(start, end + 1).reverse();
   ```

   - `slice(start, end + 1)`:
     - 주어진 `start`부터 `end`까지의 구간을 잘라냄.
     - 예: `start = 2, end = 3` → `str.slice(2, 4) = ["r", "m"]`.
   - `reverse()`:
     - 추출한 구간을 뒤집음.
     - 예: `["r", "m"]` → `["m", "r"]`.

3. **구간 교체**:

   ```jsx
   str.splice(start, reversedPart.length, ...reversedPart);
   ```

   - `splice(start, length, ...reversedPart)`:
     - `start`부터 `length`만큼의 요소를 제거하고, `reversedPart`로 교체.
     - 예: `start = 2, reversedPart = ["m", "r"]` → `str.splice(2, 2, "m", "r")`.

---

### **3. 배열을 문자열로 변환**

```jsx
return str.join("");
```

- **목적**:
  - 쿼리 처리 후 수정된 배열을 하나의 문자열로 변환.
  - `join("")`을 사용하여 배열의 요소를 공백 없이 결합.

---

### **코드 실행 예**

### **입력**

```jsx
my_string = "rermgorpsam";
queries = [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
];
```

### **단계별 변환**

1. **초기 상태**:
   - `str = ["r", "e", "r", "m", "g", "o", "r", "p", "s", "a", "m"]`.
2. **쿼리 [2, 3]**:
   - 구간: `["r", "m"]` → 뒤집기: `["m", "r"]`.
   - 결과: `["r", "e", "m", "r", "g", "o", "r", "p", "s", "a", "m"]`.
3. **쿼리 [0, 7]**:
   - 구간: `["r", "e", "m", "r", "g", "o", "r", "p"]` → 뒤집기: `["p", "r", "o", "g", "r", "m", "e", "r"]`.
   - 결과: `["p", "r", "o", "g", "r", "m", "e", "r", "s", "a", "m"]`.
4. **쿼리 [5, 9]**:
   - 구간: `["m", "e", "r", "s", "a"]` → 뒤집기: `["a", "s", "r", "e", "m"]`.
   - 결과: `["p", "r", "o", "g", "r", "a", "s", "r", "e", "m", "m"]`.
5. **쿼리 [6, 10]**:
   - 구간: `["s", "r", "e", "m", "m"]` → 뒤집기: `["m", "m", "e", "r", "s"]`.
   - 결과: `["p", "r", "o", "g", "r", "a", "m", "m", "e", "r", "s"]`.
6. **최종 문자열**:
   - `"programmers"`.
