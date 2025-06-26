[**문자열 반복해서 출력하기**](https://school.programmers.co.kr/learn/courses/30/lessons/181950)

**문제 설명**

문자열 `str`과 정수 `n`이 주어집니다.

`str`이 `n`번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

---

### 제한사항

- 1 ≤ `str`의 길이 ≤ 10
- 1 ≤ `n` ≤ 5

---

### 입출력 예

입력 #1

`string 5`

출력 #1

`stringstringstringstringstring`

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
  const str = input[0];
  const n = Number(input[1]);
  console.log(str.repeat(n));
});
```

### 설명

- `str`과 `n` 값을 입력받은 후 `str.repeat(n)`을 사용해 `str`을 `n`번 반복한 문자열을 출력하도록 수정했습니다.

이제 코드를 실행하면 입력한 문자열이 지정한 횟수만큼 반복되어 출력됩니다.
