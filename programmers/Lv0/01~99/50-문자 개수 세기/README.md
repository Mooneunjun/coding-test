> [문자 개수 세기](https://school.programmers.co.kr/learn/courses/30/lessons/181902)

### **문제 설명**

알파벳 대소문자로만 이루어진 문자열 `my_string`이 주어질 때, `my_string`에서 'A'의 개수, `my_string`에서 'B'의 개수,..., `my_string`에서 'Z'의 개수, `my_string`에서 'a'의 개수, `my_string`에서 'b'의 개수,..., `my_string`에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `my_string`의 길이 ≤ 1,000

---

### 입출력 예

| my_string     | result                                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "Programmers" | [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0] |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`에서 'P'가 1개, 'a'가 1개, 'e'가 1개, 'g'가 1개, 'm'이 2개, 'o'가 1개, 'r'가 3개, 's'가 1개 있으므로 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]를 return 합니다.

---

```jsx
function solution(my_string) {
  // 모든 알파벳 (대문자 A-Z, 소문자 a-z)을 배열로 생성
  const allAlphabets =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

  // 알파벳 개수를 저장할 배열 초기화 (길이 52, 모두 0으로 채움)
  let arr = Array.from({ length: allAlphabets.length }, () => 0);

  // 문자열을 문자 배열로 변환 후 각 문자의 개수를 카운트
  [...my_string].forEach((v) => {
    // 현재 문자의 알파벳 배열 인덱스를 찾아 해당 위치의 값을 1 증가
    arr[allAlphabets.indexOf(v)]++;
  });

  // 각 알파벳 개수가 담긴 배열 반환
  return arr;
}

// 입출력 예 테스트
console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
```

### 코드 설명

### 1. **모든 알파벳 리스트 생성**:

```jsx
const allAlphabets =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
```

- 대문자 `'A'`부터 `'Z'`, 소문자 `'a'`부터 `'z'`까지의 모든 알파벳을 문자열로 작성한 뒤, `split("")`으로 각 문자를 배열로 변환합니다.
- 결과 배열:
  ```jsx
  ["A", "B", ..., "Z", "a", "b", ..., "z"]

  ```

### 2. **결과 배열 초기화**:

```jsx
let arr = Array.from({ length: allAlphabets.length }, () => 0);
```

- `allAlphabets`의 길이(52)에 맞춰 `0`으로 초기화된 배열을 생성합니다.
- `arr[i]`는 각 알파벳의 개수를 저장하는 배열로 사용됩니다.

### 3. **문자 개수 카운팅**:

```jsx
[...my_string].forEach((v) => {
  arr[allAlphabets.indexOf(v)]++;
});
```

- `my_string`을 전개 연산자(`...`)로 문자 배열로 변환합니다.
- `forEach`를 통해 각 문자를 순회하면서:
  - `allAlphabets.indexOf(v)`로 현재 문자의 인덱스를 찾고,
  - 해당 인덱스 위치의 값을 `1` 증가시킵니다.

### 4. **결과 반환**:

```jsx
return arr;
```

- 모든 문자의 개수를 기록한 배열 `arr`를 반환합니다.
