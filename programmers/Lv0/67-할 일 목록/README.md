> [할 일 목록](https://school.programmers.co.kr/learn/courses/30/lessons/181885)

### **문제 설명**

오늘 해야 할 일이 담긴 문자열 배열 `todo_list`와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 `finished`가 매개변수로 주어질 때, `todo_list`에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `todo_list`의 길이 1 ≤ 100
- 2 ≤ `todo_list`의 원소의 길이 ≤ 20
  - `todo_list`의 원소는 영소문자로만 이루어져 있습니다.
  - `todo_list`의 원소는 모두 서로 다릅니다.
- `finished[i]`는 true 또는 false이고 true는 `todo_list[i]`를 마쳤음을, false는 아직 마치지 못했음을 나타냅니다.
- 아직 마치지 못한 일이 적어도 하나 있습니다.

---

### 입출력 예

| todo_list                                                  | finished                   | result                           |
| ---------------------------------------------------------- | -------------------------- | -------------------------------- |
| ["problemsolving", "practiceguitar", "swim", "studygraph"] | [true, false, true, false] | ["practiceguitar", "studygraph"] |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `todo_list` 중에서 "problemsolving"과 "swim"은 마쳤고, "practiceguitar"와 "studygraph"는 아직 마치지 못했으므로 `todo_list`에서 나온 순서대로 담은 문자열 배열 ["practiceguitar", "studygraph"]를 return 합니다.

---

```jsx
function solution(todo_list, finished) {
  return todo_list.filter((_, i) => !finished[i]);
}
```

---

### 코드설명

1. **입력 데이터**:
   - `todo_list`: 해야 할 일들의 목록이 문자열 배열로 제공됩니다.
   - `finished`: 각 작업이 완료되었는지 여부를 나타내는 boolean 배열로, `true`는 완료, `false`는 미완료를 의미합니다.
2. **`filter` 메서드**:
   - `filter`는 배열을 순회하면서 조건에 맞는 원소만을 포함한 새 배열을 반환합니다.
   - `filter`의 콜백 함수는 두 개의 매개변수를 받습니다:
     - `_`: 현재 순회 중인 원소 (이 문제에서는 사용하지 않으므로 `_`로 처리).
     - `i`: 현재 순회 중인 원소의 0-based index.
3. **조건 설정**:
   - `!finished[i]`:
     - `finished` 배열에서 현재 작업(`i`번째)이 미완료(`false`)인 경우에만 `todo_list[i]`를 반환합니다.
   - 이 조건을 만족하는 항목들만 새 배열에 포함됩니다.
4. **결과 반환**:
   - `todo_list`에서 `finished` 배열 기준으로 아직 완료되지 않은 작업들만 포함된 새 배열을 반환합니다.
