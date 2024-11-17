> [덧셈식 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181947)

### **문제 설명**

두 정수 `a`, `b`가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.

`a + b = c`

---

### 제한사항

- 1 ≤ `a`, `b` ≤ 100

---

### 입출력 예

입력 #1

`4 5`

출력 #1

`4 + 5 = 9`

---

### 코드

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
  const a = Number(input[0]);
  const b = Number(input[1]);
  const c = a + b;
  console.log(`${a} + ${b} = ${c}`);
});
```

---

### 코드 설명

1. **입력 처리**
   - `line.split(' ')`을 사용하여 입력받은 문자열을 공백으로 분리하여 `input` 배열에 저장합니다.
   - 예를 들어, 입력이 `4 5`라면 `input` 배열은 `["4", "5"]`가 됩니다.
2. **정수로 변환**
   - `Number(input[0])`와 `Number(input[1])`를 사용해 `input` 배열의 첫 번째와 두 번째 요소를 정수로 변환하여 변수 `a`와 `b`에 각각 저장합니다.
   - 이때 `a`와 `b`는 각각 `4`와 `5`가 됩니다.
3. **덧셈 연산**
   - `const c = a + b;`에서 `a`와 `b`의 합을 계산하여 `c`에 저장합니다.
   - 이 경우, `c`의 값은 `9`가 됩니다.
4. **결과 출력**
   - `console.log(\`${a} + ${b} = ${c}`);`를 사용하여 지정된 형식으로 계산식을 출력합니다.
   - 예를 들어, 입력이 `4 5`일 경우 `4 + 5 = 9`가 출력됩니다.

---

이 코드는 코딩 테스트 환경에서 `a`와 `b`를 입력받아, 덧셈 결과를 포함한 계산식을 요구된 형식으로 출력할 수 있습니다.
