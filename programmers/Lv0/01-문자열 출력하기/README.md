# 문자열 출력하기

### **문제 설명**

문자열 `str`이 주어질 때, `str`을 출력하는 코드를 작성해 보세요.

---

### 제한사항

- 1 ≤ `str`의 길이 ≤ 1,000,000
- `str`에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.

---

### 입출력 예

입력 #1

`HelloWorld!`

출력 #1

`HelloWorld!`

---

### 코드 설명

이 문제는 단순히 입력된 문자열을 출력하는 문제입니다. 코드의 주요 부분은 `readline` 모듈을 사용하여 표준 입력을 처리하고, 입력받은 문자열을 바로 출력하는 것입니다. 이 경우, `console.log(str)`을 사용해 최종적으로 문자열을 출력해야 합니다.

아래는 전체 코드를 정리한 예시입니다.

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
  console.log(str);
});
```

`.on('close')`에서 입력받은 문자열을 `str` 변수로 저장하고 `console.log(str);`로 출력합니다.

이 코드는 프로그램이 입력을 마친 뒤, 해당 문자열을 그대로 출력하도록 구현되었습니다.
