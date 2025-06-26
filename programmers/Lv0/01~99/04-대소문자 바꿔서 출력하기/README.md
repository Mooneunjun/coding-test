> [대소문자 바꿔서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181949)

### **문제 설명**

영어 알파벳으로 이루어진 문자열 `str`이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

---

### 제한사항

- 1 ≤ `str`의 길이 ≤ 20
  - `str`은 알파벳으로 이루어진 문자열입니다.

---

### 입출력 예

입력 #1

`aBcDeFg`

출력 #1

`AbCdEfG`

---

주어진 문제는 입력받은 문자열에서 대문자는 소문자로, 소문자는 대문자로 변환하여 출력하는 것입니다. 아래는 이를 해결하는 코드입니다.

### 코드

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
  const result = [...str]
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
  console.log(result);
});
```

### 코드 설명

**대소문자 변환 (스프레드 연산자와 `map` 함수 사용)**

- `const str = input[0];`에서 `str`에 입력된 문자열을 가져옵니다.
- `[...str]`은 문자열을 각 문자로 분해해 배열로 만듭니다. 예를 들어, `"aBc"`는 `["a", "B", "c"]`로 변환됩니다.
- `map` 함수를 사용해 각 문자를 검사하고 변환합니다:
  - `char === char.toUpperCase()` 조건으로 현재 문자가 대문자인지 확인합니다.
  - 대문자라면 `char.toLowerCase()`로 소문자로 변환하고, 소문자라면 `char.toUpperCase()`로 대문자로 변환합니다.
- 변환된 결과 배열을 `join('')`을 사용해 하나의 문자열로 합칩니다.

**결과 출력**

- `console.log(result);`를 통해 변환된 문자열을 출력합니다.

### 입출력 예시

- 입력: `aBcDeFg`
- 출력: `AbCdEfG`

이 코드는 문제의 요구 사항에 맞게 대소문자를 변환한 결과를 출력합니다.
