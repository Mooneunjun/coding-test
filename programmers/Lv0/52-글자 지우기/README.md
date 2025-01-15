> [글자 지우기](https://school.programmers.co.kr/learn/courses/30/lessons/181900)

### **문제 설명**

문자열 `my_string`과 정수 배열 `indices`가 주어질 때, `my_string`에서 `indices`의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `indices`의 길이 < `my_string`의 길이 ≤ 100
- `my_string`은 영소문자로만 이루어져 있습니다
- 0 ≤ `indices`의 원소 < `my_string`의 길이
- `indices`의 원소는 모두 서로 다릅니다.

---

### 입출력 예

| my_string             | indices                      | result        |
| --------------------- | ---------------------------- | ------------- |
| "apporoograpemmemprs" | [1, 16, 6, 15, 0, 10, 11, 3] | "programmers" |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`의 인덱스가 잘 보이도록 표를 만들면 다음과 같습니다.

| index     | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | 14  | 15  | 16  | 17  | 18  |
| --------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| my_string | a   | p   | p   | o   | r   | o   | o   | g   | r   | a   | p   | e   | m   | m   | e   | m   | p   | r   | s   |

``indices`에 있는 인덱스의 글자들을 지우고 이어붙이면 "programmers"가 되므로 이를 return 합니다.`

---

```jsx
function solution(my_string, indices) {
  // Set으로 변환하여 빠른 검색 수행
  const indicesSet = new Set(indices);

  // 제거할 인덱스를 제외하고 문자열 구성
  return [...my_string].filter((_, idx) => !indicesSet.has(idx)).join("");
}

// 입출력 예 테스트
console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // "programmers"
```

---

### **코드 설명**

1. **`Set` 변환**:
   - `indices` 배열을 `Set`으로 변환하여 인덱스의 존재 여부를 효율적으로 확인합니다.
   - `Set`은 데이터 검색과 확인 작업에서 평균 시간 복잡도가 입니다.
     O(1)O(1)
   - 예: `[1, 16, 6, 15, 0, 10, 11, 3]` → `Set { 1, 16, 6, 15, 0, 10, 11, 3 }`.
2. **문자열 필터링**:
   - `filter` 메서드로 `my_string`을 순회하면서 `indicesSet.has(idx)`로 현재 인덱스가 `indices`에 포함되어 있는지 확인합니다.
   - 포함되어 있지 않은 경우(`!indicesSet.has(idx)`), 해당 문자를 결과 배열에 유지합니다.
3. **결과 문자열 반환**:
   - 필터링된 문자 배열을 `join('')`으로 결합하여 최종 문자열을 반환합니다.

---

### **작동 원리**

### 입력:

```jsx
solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]);
```

1. **`indicesSet` 변환**:
   - `Set { 1, 16, 6, 15, 0, 10, 11, 3 }`.
2. **`filter` 적용**:
   - 순회하며 다음 조건 확인:
     - 인덱스 `0` → `indicesSet.has(0)` → `true` → 제외.
     - 인덱스 `1` → `indicesSet.has(1)` → `true` → 제외.
     - 인덱스 `2` → `indicesSet.has(2)` → `false` → 유지.
     - ... (반복).
   - 결과 배열: `['p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e', 'r', 's']`.
3. **`join`으로 결합**:
   - 최종 문자열: `"programmers"`.
