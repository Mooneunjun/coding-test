> [접미사 배열](https://school.programmers.co.kr/learn/courses/30/lessons/181909)

### **문제 설명**

어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.

문자열 `my_string`이 매개변수로 주어질 때, `my_string`의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- `my_string`은 알파벳 소문자로만 이루어져 있습니다.
- 1 ≤ `my_string`의 길이 ≤ 100

---

### 입출력 예

| my_string     | result                                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| "banana"      | ["a", "ana", "anana", "banana", "na", "nana"]                                                                  |
| "programmers" | ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"] |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `my_string`는 "banana"로 모든 접미사는 문제의 설명과 같습니다. 이를 사전순으로 정렬하면 "a", "ana", "anana", "banana", "na", "nana"이므로 ["a", "ana", "anana", "banana", "na", "nana"]를 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`는 "programmers"이고 모든 접미사는 "programmers", "rogrammers", "ogrammers", "grammers", "rammers", "ammers", "mmers", "mers", "ers", "rs", "s"입니다. 이를 사전순으로 정렬한 문자열 배열 ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]를 return 합니다.

---

```jsx
function solution(my_string) {
  return Array.from({ length: my_string.length }, (_, i) =>
    my_string.slice(i)
  ).sort();
}
```

---

### **코드 설명**

### **1. 접미사 배열 생성**

```jsx
Array.from({ length: my_string.length }, (_, i) => my_string.slice(i));
```

- **목적**:
  - 주어진 문자열 `my_string`의 모든 접미사를 생성합니다.
- **작동 방식**:
  - `Array.from({ length: my_string.length }, callback)`:
    - 길이가 `my_string.length`인 배열을 생성.
    - 콜백 함수의 인덱스 `i`를 사용하여 접미사를 만듦.
  - `my_string.slice(i)`:
    - 문자열 `my_string`의 `i`번째 인덱스부터 끝까지 잘라냄.
  - 예:
    - 입력: `"banana"`
    - 생성 과정:
      - `i = 0` → `"banana"`.
      - `i = 1` → `"anana"`.
      - `i = 2` → `"nana"`.
      - `i = 3` → `"ana"`.
      - `i = 4` → `"na"`.
      - `i = 5` → `"a"`.
    - 결과: `["banana", "anana", "nana", "ana", "na", "a"]`.

---

### **2. 사전순 정렬**

```jsx
.sort();

```

- **목적**:
  - 생성한 접미사 배열을 사전순(알파벳순)으로 정렬.
- **작동 방식**:
  - `sort()`는 문자열의 유니코드 값에 따라 배열 요소를 정렬.
  - 예:
    - 정렬 전: `["banana", "anana", "nana", "ana", "na", "a"]`.
    - 정렬 후: `["a", "ana", "anana", "banana", "na", "nana"]`.

---

### **코드 실행 예**

### **입력 1**

```jsx
solution("banana");
```

### **동작 과정**

1. 접미사 생성:

   ```jsx
   ["banana", "anana", "nana", "ana", "na", "a"];
   ```

2. 사전순 정렬:

   ```jsx
   ["a", "ana", "anana", "banana", "na", "nana"];
   ```

### **출력**

```jsx
["a", "ana", "anana", "banana", "na", "nana"];
```

---

### **입력 2**

```jsx
solution("programmers");
```

### **동작 과정**

1. 접미사 생성:

   ```jsx
   [
     "programmers",
     "rogrammers",
     "ogrammers",
     "grammers",
     "rammers",
     "ammers",
     "mmers",
     "mers",
     "ers",
     "rs",
     "s",
   ];
   ```

2. 사전순 정렬:

   ```jsx
   [
     "ammers",
     "ers",
     "grammers",
     "mers",
     "mmers",
     "ogrammers",
     "programmers",
     "rammers",
     "rogrammers",
     "rs",
     "s",
   ];
   ```

### **출력**

```jsx
[
  "ammers",
  "ers",
  "grammers",
  "mers",
  "mmers",
  "ogrammers",
  "programmers",
  "rammers",
  "rogrammers",
  "rs",
  "s",
];
```

---

```jsx
function solution(my_string) {
  return Array.from({ length: my_string.length }, (_, i) =>
    my_string.slice(i)
  ).sort();
}
```

---

### **코드 설명**

### **1. 접미사 배열 생성**

```jsx
Array.from({ length: my_string.length }, (_, i) => my_string.slice(i));
```

- **목적**:
  - 주어진 문자열 `my_string`의 모든 접미사를 생성합니다.
- **작동 방식**:
  - `Array.from({ length: my_string.length }, callback)`:
    - 길이가 `my_string.length`인 배열을 생성.
    - 콜백 함수의 인덱스 `i`를 사용하여 접미사를 만듦.
  - `my_string.slice(i)`:
    - 문자열 `my_string`의 `i`번째 인덱스부터 끝까지 잘라냄.
  - 예:
    - 입력: `"banana"`
    - 생성 과정:
      - `i = 0` → `"banana"`.
      - `i = 1` → `"anana"`.
      - `i = 2` → `"nana"`.
      - `i = 3` → `"ana"`.
      - `i = 4` → `"na"`.
      - `i = 5` → `"a"`.
    - 결과: `["banana", "anana", "nana", "ana", "na", "a"]`.

---

### **2. 사전순 정렬**

```jsx
.sort();

```

- **목적**:
  - 생성한 접미사 배열을 사전순(알파벳순)으로 정렬.
- **작동 방식**:
  - `sort()`는 문자열의 유니코드 값에 따라 배열 요소를 정렬.
  - 예:
    - 정렬 전: `["banana", "anana", "nana", "ana", "na", "a"]`.
    - 정렬 후: `["a", "ana", "anana", "banana", "na", "nana"]`.
