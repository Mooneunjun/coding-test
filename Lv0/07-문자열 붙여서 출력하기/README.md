> [문자열 붙여서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181946)

### **문제 설명**

두 개의 문자열 `str1`, `str2`가 공백으로 구분되어 입력으로 주어집니다.

입출력 예와 같이 `str1`과 `str2`을 이어서 출력하는 코드를 작성해 보세요.

---

### 제한사항

- 1 ≤ `str1`, `str2`의 길이 ≤ 10

---

### 입출력 예

입력 #1

`apple pen`

출력 #1

`applepen`

입력 #2

`Hello World!`

출력 #2

`HelloWorld!`

---

```jsx
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str1 = input[0];
  str2 = input[1];
  console.log(str1 + str2);
});
```

### 코드 설명

1. **입력 처리**
   - `line.split(' ')`를 사용해 입력 문자열을 공백을 기준으로 나누고, 각각 `input[0]`과 `input[1]`에 저장합니다.
   - 예를 들어, 입력이 `apple pen`이라면 `input` 배열은 `["apple", "pen"]`이 됩니다.
2. **문자열 이어붙이기**
   - `const str1 = input[0];`와 `const str2 = input[1];`를 통해 `str1`과 `str2`에 값을 할당합니다.
   - `str1 + str2`를 사용하여 두 문자열을 이어붙입니다. 이는 문자열을 하나로 합치기 위해 사용하는 연산입니다.
3. **출력**
   - `console.log(str1 + str2);`를 통해 이어붙인 문자열을 출력합니다.

### 실행 결과

입력:

```
Hello World!
```

출력:

```
HelloWorld!
```
