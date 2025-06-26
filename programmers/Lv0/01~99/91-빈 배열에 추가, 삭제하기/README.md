> [빈 배열에 추가, 삭제하기](https://school.programmers.co.kr/learn/courses/30/lessons/181860)

### **문제 설명**

아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 `arr`과 boolean 배열 `flag`가 매개변수로 주어질 때, `flag`를 차례대로 순회하며 `flag[i]`가 true라면 X의 뒤에 `arr[i]`를 `arr[i]` × 2 번 추가하고, `flag[i]`가 false라면 X에서 마지막 `arr[i]`개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `arr`의 길이 = `flag`의 길이 ≤ 100
- `arr`의 모든 원소는 1 이상 9 이하의 정수입니다.
- 현재 X의 길이보다 더 많은 원소를 빼는 입력은 주어지지 않습니다.

---

### 입출력 예

| arr             | flag                              | result                   |
| --------------- | --------------------------------- | ------------------------ |
| [3, 2, 4, 1, 3] | [true, false, true, false, false] | [3, 3, 3, 3, 4, 4, 4, 4] |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번에서 X의 변화를 표로 나타내면 다음과 같습니다

| i   | flag[i] | arr[i] | X                                    |
| --- | ------- | ------ | ------------------------------------ |
|     |         |        | []                                   |
| 0   | true    | 3      | [3, 3, 3, 3, 3, 3]                   |
| 1   | false   | 2      | [3, 3, 3, 3]                         |
| 2   | true    | 4      | [3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4] |
| 3   | false   | 1      | [3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4]    |
| 4   | false   | 3      | [3, 3, 3, 3, 4, 4, 4, 4]             |

`따라서 [3, 3, 3, 3, 4, 4, 4, 4]를 return 합니다.`

---

```jsx
function solution(arr, flag) {
  const X = []; // 결과 배열 초기화

  arr.forEach((num, i) => {
    if (flag[i]) {
      // flag[i]가 true이면 num을 num * 2번 추가
      X.push(...Array(num * 2).fill(num));
    } else {
      // flag[i]가 false이면 X에서 num개의 원소 제거
      X.splice(-num, num);
    }
  });

  return X;
}
```

---

### **코드설명**

1. **결과 배열 `X` 초기화**

   ```jsx
   const X = [];
   ```

   - 초기에는 빈 배열.

2. **`arr`와 `flag`를 순회하며 처리**

   ```jsx
   arr.forEach((num, i) => { ... });

   ```

   - `arr[i]`의 값 `num`과 `flag[i]` 값을 가져와 처리.

3. **`flag[i]`가 `true`일 경우**

   ```jsx
   X.push(...Array(num * 2).fill(num));
   ```

   - `Array(num * 2).fill(num)`: 길이가 `num * 2`인 배열을 만들고, `num` 값으로 채움.
   - `push(...Array(...))`: 스프레드 연산자를 사용하여 배열을 `X`에 추가.

4. **`flag[i]`가 `false`일 경우**

   ```jsx
   X.splice(-num, num);
   ```

   - `splice(-num, num)`: 배열의 끝에서 `num`개의 원소를 제거.

5. **최종 결과 반환**

   ```jsx
   return X;
   ```

   - 모든 연산을 마친 후 배열 `X`를 반환.
