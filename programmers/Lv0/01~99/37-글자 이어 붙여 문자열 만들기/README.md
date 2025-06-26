> [글자 이어 붙여 문자열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/181915)

### **문제 설명**

문자열 `my_string`과 정수 배열 `index_list`가 매개변수로 주어집니다. `my_string`의 `index_list`의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `my_string`의 길이 ≤ 1,000
- `my_string`의 원소는 영소문자로 이루어져 있습니다.
- 1 ≤ `index_list`의 길이 ≤ 1,000
- 0 ≤ `index_list`의 원소 < `my_string`의 길이

---

### 입출력 예

| my_string            | index_list                               | result        |
| -------------------- | ---------------------------------------- | ------------- |
| "cvsgiorszzzmrpaqpe" | [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7] | "programmers" |
| "zpiaz"              | [1, 2, 0, 0, 3]                          | "pizza"       |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`에서 인덱스 3, 5, 6, 11, 12, 14, 16, 17에 해당하는 글자는 각각 g, o, r, m, r, a, p, e이므로 `my_string`에서 `index_list`에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, r, o, g, r, a, m, m, e, r, s입니다. 따라서 "programmers"를 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`에서 인덱스 0, 1, 2, 3에 해당하는 글자는 각각 z, p, i, a이므로 `my_string`에서 `index_list`에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, i, z, z, a입니다. 따라서 "pizza"를 return 합니다.

---

```jsx
function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}
```

### **코드 설명**

### **1. `map`을 이용한 인덱스 문자 추출**

```jsx
index_list.map((i) => my_string[i]);
```

- **작동 방식**:
  - `index_list` 배열을 순회하며, 각 인덱스 `i`에 해당하는 `my_string`의 글자를 추출합니다.
  - 예:
    - `my_string = "cvsgiorszzzmrpaqpe"`, `index_list = [16, 6, 5, 3]`
    - `my_string[16] = "p"`, `my_string[6] = "r"`, `my_string[5] = "o"`, `my_string[3] = "g"`.
  - 결과: `['p', 'r', 'o', 'g','r', 'a', 'm', 'm','e', 'r', 's' ]`

---

### **2. 추출된 글자 배열을 문자열로 변환**

```jsx
.join("")

```

- **작동 방식**:
  - `map`으로 생성된 배열의 요소를 순서대로 이어 붙여 하나의 문자열로 변환합니다.
  - 예: `['p', 'r', 'o', 'g','r', 'a', 'm', 'm','e', 'r', 's' ]` → `"programmers"`.

---

### **최종 동작**

1. `index_list`의 각 원소에 해당하는 인덱스의 글자를 추출.
2. 추출된 글자 배열을 문자열로 변환하여 반환.

---

### **코드 실행 예**

```jsx
console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
// "programmers"

console.log(solution("zpiaz", [1, 2, 0, 0, 3]));
// "pizza"
```
