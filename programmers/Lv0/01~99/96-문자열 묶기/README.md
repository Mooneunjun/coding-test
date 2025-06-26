> [문자열 묶기](https://school.programmers.co.kr/learn/courses/30/lessons/181855)

### **문제 설명**

문자열 배열 `strArr`이 주어집니다. `strArr`의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

---

### 제한사항

- 1 ≤ `strArr`의 길이 ≤ 100,000
  - 1 ≤ `strArr`의 원소의 길이 ≤ 30
  - `strArr`의 원소들은 알파벳 소문자로 이루어진 문자열입니다.

---

### 입출력 예

| strArr                    | result |
| ------------------------- | ------ |
| ["a","bc","d","efg","hi"] | 2      |

---

### 입출력 예 설명

**입출력 예 #1**

- 각 문자열들을 길이에 맞게 그룹으로 묶으면 다음과 같습니다.

| 문자열 길이 | 문자열 목록 | 개수 |
| ----------- | ----------- | ---- |
| 1           | ["a","d"]   | 2    |
| 2           | ["bc","hi"] | 2    |
| 3           | ["efg"]     | 1    |

- 개수의 최댓값은 2이므로 2를 return 합니다.

---

```jsx
function solution(strArr) {
  const lengthCount = new Map(); // 문자열 길이별 개수를 저장할 Map

  // 각 문자열의 길이를 카운트
  for (const str of strArr) {
    const len = str.length;
    lengthCount.set(len, (lengthCount.get(len) || 0) + 1);
  }

  // 가장 큰 그룹 크기 찾기
  return Math.max(...lengthCount.values());
}
```

---

### **코드설명**

1. **문자열 길이별 개수를 저장할 `Map` 생성**

   ```jsx
   const lengthCount = new Map();
   ```

   - `Map`을 사용하여 문자열 길이를 key로 하고, 해당 길이를 가진 문자열 개수를 value로 저장합니다.

2. **각 문자열의 길이를 `Map`에 카운트**

   ```jsx
   for (const str of strArr) {
     const len = str.length;
     lengthCount.set(len, (lengthCount.get(len) || 0) + 1);
   }
   ```

   - `str.length`를 이용하여 문자열 길이를 가져옵니다.
   - `lengthCount.get(len) || 0`: 기존에 해당 길이가 `Map`에 존재하면 그 값을 가져오고, 없으면 `0`으로 설정.
   - `set(len, count + 1)`: 해당 길이의 문자열 개수를 증가.

3. **가장 개수가 많은 그룹 찾기**

   ```jsx
   return Math.max(...lengthCount.values());
   ```

   - `lengthCount.values()`는 `Map`에 저장된 모든 문자열 개수를 반환.
   - `Math.max(...)`를 이용하여 가장 큰 값을 찾음.
