> [특수문자 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181948)

### **문제 설명**

다음과 같이 출력하도록 코드를 작성해 주세요.

---

출력 예시

`!@#$%^&*(\'"<>?:;`

이 문제는 별도의 입력을 받지 않고, 주어진 문자열을 그대로 출력하는 것이 목표입니다.

---

## 코드

```jsx
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log("!@#$%^&*(\\'\"<>?:;");
}

```

---

## 코드 설명

1. **출력**

   `console.log`를 사용해 문제에서 제시한 특수 문자를 출력합니다.

   `console.log("!@#$%^&*(\\'\"<>?:;");`에서 문자열 내 특수 문자 `'`와 `"`는 각각 `\'`와 `\"`로 이스케이프 처리하여 정확하게 출력할 수 있도록 합니다.

---

### 이 코드의 실행 결과

위 코드를 실행하면 다음과 같은 결과가 출력됩니다.

```
!@#$%^&*(\'"<>?:;
```

이 문제는 단순히 문자열을 출력하는 작업이므로, 입력이나 복잡한 로직 없이도 해결할 수 있는 기초적인 문제입니다.
