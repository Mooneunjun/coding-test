> [특정한 문자를 대문자로 바꾸지](https://school.programmers.co.kr/learn/courses/30/lessons/181873)

### **문제 설명**

영소문자로 이루어진 문자열 `my_string`과 영소문자 1글자로 이루어진 문자열 `alp`가 매개변수로 주어질 때, `my_string`에서 `alp`에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `my_string`의 길이 ≤ 1,000

---

### 입출력 예

| my_string     | alp | result        |
| ------------- | --- | ------------- |
| "programmers" | "p" | "Programmers" |
| "lowercase"   | "x" | "lowercase"   |
|               |     |               |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`은 "programmers"이고 `alp`가 "p"이므로 `my_string`에 모든 p를 대문자인 P로 바꾼 문자열 "Programmers"를 return 합니다.

입출력 예 #2

- 예제 2번의 `alp`는 "x"이고 `my_string`에 x는 없습니다. 따라서 "lowercase"를 return 합니다.

---

```jsx
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}
```

---

### 코드설명

1. **`replaceAll` 메서드 사용**:
   - `my_string.replaceAll(alp, alp.toUpperCase())`는 문자열 `my_string`에서 `alp`에 해당하는 모든 글자를 대문자로 변환합니다.
   - `replaceAll`은 문자열의 모든 일치 항목을 변환하기 때문에 반복적인 작업 없이 한 번에 처리할 수 있습니다.
2. **`toUpperCase` 메서드**:
   - `alp.toUpperCase()`는 `alp`(소문자 1글자)를 대문자로 변환합니다.
   - 변환된 대문자가 `replaceAll`의 두 번째 인자로 사용됩니다.
3. **결과 반환**:
   - 변환 작업이 완료된 새 문자열을 반환합니다.
