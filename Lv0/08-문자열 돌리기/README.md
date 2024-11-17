> [**문자열 돌리기**](https://school.programmers.co.kr/learn/courses/30/lessons/181945)

### **문제 설명**

문자열 `str`이 주어집니다.

문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

---

### 제한사항

1 ≤ `str`의 길이 ≤ 10

---

### 입출력 예

입력 #1

`abcde`

출력 #1

```jsx
a;
b;
c;
d;
e;
```

---

## 코드

```jsx
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  const str = input[0];
  const rotated = [...str].join("\n");
  console.log(rotated);
});
```

### 코드 설명

1. **입력 처리**
   - `input` 배열에 `line` 값을 저장합니다. 이 배열의 첫 번째 값이 입력된 문자열 `str`이 됩니다.
2. **문자열 90도 회전**
   - `const str = input[0];`: 입력받은 문자열을 `str`에 저장합니다.
   - `[...str]`: 문자열 `str`을 스프레드 연산자를 사용해 문자 배열로 변환합니다.
     예: `"abcde"` → `['a', 'b', 'c', 'd', 'e']`
   - `join('\n')`: 변환된 배열을 줄바꿈 문자(`\n`)로 연결하여 세로 방향 문자열로 변환합니다.
3. **결과 출력**
   - `console.log(rotated);`: 회전된 문자열을 출력합니다.
