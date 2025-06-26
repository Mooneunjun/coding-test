> [문자열 곱하기](https://school.programmers.co.kr/learn/courses/30/lessons/181940)

### **문제 설명**

문자열 `my_string`과 정수 `k`가 주어질 때, `my_string`을 `k`번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `my_string`의 길이 ≤ 100
- `my_string`은 영소문자로만 이루어져 있습니다.
- 1 ≤ `k` ≤ 100

---

### 입출력 예

| my_string | k   | result                                     |
| --------- | --- | ------------------------------------------ |
| "string"  | 3   | "stringstringstring"                       |
| "love"    | 10  | "lovelovelovelovelovelovelovelovelovelove" |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`은 "string"이고 이를 3번 반복한 문자열은 "stringstringstring"이므로 이를 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`은 "love"이고 이를 10번 반복한 문자열은 "lovelovelovelovelovelovelovelovelovelove"이므로 이를 return 합니다.

---

```jsx
function solution(my_string, k) {
  var answer = my_string.repeat(k); // my_string을 k번 반복
  return answer;
}
```

### 코드 설명

1. **`repeat` 메서드**
   - `my_string.repeat(k)`를 사용하면 문자열 `my_string`을 `k`번 반복한 새로운 문자열을 생성합니다.예: `"string".repeat(3)` → `"stringstringstring"`
2. **결과 반환**
   - 반복된 문자열을 `answer` 변수에 저장하고 이를 반환합니다.

### 입출력 예 설명

### 입출력 예 #1

```jsx
my_string = "string";
k = 3;
```

- **실행 과정**:
  - `"string".repeat(3)` → `"stringstringstring"`
- **결과**:
  ```jsx
  return "stringstringstring";
  ```

!! `repeat` 메서드는 반복된 문자열을 생성하는 데 매우 효율적입니다.
