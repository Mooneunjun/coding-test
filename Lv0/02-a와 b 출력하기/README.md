# a와 b 출력하기

### **문제 설명**

정수 `a`와 `b`가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.

---

### 제한사항

- 100,000 ≤ `a`, `b` ≤ 100,000

---

### 입출력 예

입력 #1

`4 5`

출력 #1

`a = 4
b = 5`

---

주어진 문제는 두 정수 `a`와 `b`를 입력받아 특정 형식으로 출력하는 것입니다.

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
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
});
```

### 설명

1. **입력 처리**

   `input` 배열에 `line.split(' ')`을 통해 공백으로 분리된 두 숫자를 입력받습니다.

2. **출력 형식**

   입력받은 `a`와 `b` 값을 각각 변수에 저장한 후, 요구된 형식에 맞춰 `console.log`로 출력합니다.

### 입출력

- 입력: `4 5`
- 출력:

  ```
  a = 4
  b = 5

  ```

이 코드로 문제 요구사항을 충족할 수 있습니다.
