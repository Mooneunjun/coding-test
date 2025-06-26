> [배열의 길이를 2의 거듭제곱으로 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/181857)

### **문제 설명**

정수 배열 `arr`이 매개변수로 주어집니다. `arr`의 길이가 2의 정수 거듭제곱이 되도록 `arr` 뒤에 정수 0을 추가하려고 합니다. `arr`에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `arr`의 길이 ≤ 1,000
- 1 ≤ `arr`의 원소 ≤ 1,000

---

### 입출력 예

| arr                | result                   |
| ------------------ | ------------------------ |
| [1, 2, 3, 4, 5, 6] | [1, 2, 3, 4, 5, 6, 0, 0] |
| [58, 172, 746, 89] | [58, 172, 746, 89]       |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번의 `arr`의 길이는 6입니다. `arr`의 길이를 2의 정수 거듭제곱으로 만드는 방법은 0을 2개, 10개, 26개,..., 추가하는 방법이 있고 그중 최소한으로 0을 추가하는 방법은 2개를 추가하는 것입니다. 따라서 [1, 2, 3, 4, 5, 6, 0, 0]을 return 합니다.

입출력 예 #2

- 예제 2번의 `arr`의 길이는 4이고 이미 2의 정수 거듭제곱입니다. 따라서 뒤에 0을 추가하지 않아도 되므로 [58, 172, 746, 89]를 return 합니다.

---

```jsx
function solution(arr) {
  const length = arr.length;
  const targetLength = 2 ** Math.ceil(Math.log2(length)); // 가장 가까운 2의 거듭제곱 계산
  return [...arr, ...Array(targetLength - length).fill(0)]; // 부족한 부분 0으로 채우기
}
```

---

### **코드설명**

1. **현재 배열 길이 계산**

   ```jsx
   const length = arr.length;
   ```

   - 현재 `arr`의 길이를 `length` 변수에 저장합니다.

2. **가장 가까운 2의 거듭제곱 찾기**

   ```jsx
   const targetLength = 2 ** Math.ceil(Math.log2(length));
   ```

   - `Math.log2(length)`: 현재 길이의 로그(base 2)를 구합니다.
   - `Math.ceil(...)`: 올림하여 가장 가까운 2의 거듭제곱을 찾습니다.
   - `2 ** ...`: 2의 거듭제곱을 계산하여 `targetLength`에 저장합니다.

3. **부족한 부분을 0으로 채우기**

   ```jsx
   return [...arr, ...Array(targetLength - length).fill(0)];
   ```

   - `Array(targetLength - length).fill(0)`: 부족한 길이만큼 0을 채운 배열을 생성합니다.
   - `...arr, ...Array(...)`: 스프레드 연산자로 `arr`의 기존 값과 0을 추가한 배열을 합칩니다.
