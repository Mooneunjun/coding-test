> [홀짝 구분하기](https://school.programmers.co.kr/learn/courses/30/lessons/181944)

### **문제 설명**

자연수 `n`이 입력으로 주어졌을 때 만약 `n`이 짝수이면 "`n` is even"을, 홀수이면 "`n` is odd"를 출력하는 코드를 작성해 보세요.

---

### 제한사항

- 1 ≤ `n` ≤ 1,000

---

### 입출력 예

입력 #1

`100`

출력 #1

`100 is even`

입력 #2

`1`

출력 #2

`1 is odd`

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
  const n = Number(input[0]);
  console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`); // 조건에 따라 출력
});
```

### 코드 설명

1. **입력 처리**
   - `line.split(" ")`을 통해 입력값을 공백 기준으로 분리하여 `input` 배열에 저장합니다.
   - 첫 번째 값(`input[0]`)을 `Number(input[0])`으로 변환하여 `n` 변수에 저장합니다.
2. **짝수/홀수 판별 및 출력**
   - 삼항 연산자(`? :`)를 사용하여 `n % 2 === 0` 조건을 평가합니다.
     - 조건이 참이면 `n`은 짝수이므로 `${n} is even`을 출력합니다.
     - 조건이 거짓이면 `n`은 홀수이므로 `${n} is odd`을 출력합니다.
3. **출력 형식**
   - 예를 들어, 입력값이 `100`일 경우 `100 is even`이 출력됩니다.
   - 입력값이 `1`일 경우 `1 is odd`가 출력됩니다.

---

### 실행 예시

입력:

```
100
```

출력:

```
100 is even
```
