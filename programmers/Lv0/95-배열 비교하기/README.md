> [배열 비교하기](https://school.programmers.co.kr/learn/courses/30/lessons/181856)

### **문제 설명**

이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

- 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
- 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.

두 정수 배열 `arr1`과 `arr2`가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 `arr2`가 크다면 -1, `arr1`이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `arr1`의 길이 ≤ 100
- 1 ≤ `arr2`의 길이 ≤ 100
- 1 ≤ `arr1`의 원소 ≤ 100
- 1 ≤ `arr2`의 원소 ≤ 100
- 문제에서 정의한 배열의 대소관계가 일반적인 프로그래밍 언어에서 정의된 배열의 대소관계와 다를 수 있는 점에 유의해주세요.

---

### 입출력 예

| arr1             | arr2             | result |
| ---------------- | ---------------- | ------ |
| [49, 13]         | [70, 11, 2]      | -1     |
| [100, 17, 84, 1] | [55, 12, 65, 36] | 1      |
| [1, 2, 3, 4, 5]  | [3, 3, 3, 3, 3]  | 0      |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번에서는 `arr1`의 길이는 2이고 `arr2`의 길이는 3으로 `arr2`의 길이가 더 깁니다. 따라서 `arr2`가 `arr1`보다 크므로 -1을 return 합니다.

입출력 예 #2

- 예제 2번에서는 `arr1`의 길이과 `arr2`의 길이가 4로 같습니다. `arr1`의 모든 원소의 합은 100 + 17 + 84 + 1 = 202이고 `arr2`의 모든 원소의 합은 55 + 12 + 65 + 36 = 168으로 `arr1`의 모든 원소의 합이 더 큽니다. 따라서 `arr1`이 `arr2`보다 크므로 1을 return 합니다.

입출력 예 #3

- 예제 3번에서는 `arr1`의 길이와 `arr2`의 길이가 5로 같고 각 배열의 모든 원소의 합 또한 15로 같습니다. 따라서 `arr1`과 `arr2`가 같으므로 0을 return 합니다.

---

```jsx
function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  }

  const sum1 = arr1.reduce((acc, num) => acc + num, 0);
  const sum2 = arr2.reduce((acc, num) => acc + num, 0);

  return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
}
```

---

### **코드설명**

1. **배열 길이 비교**

   ```jsx
   if (arr1.length !== arr2.length) {
     return arr1.length > arr2.length ? 1 : -1;
   }
   ```

   - 두 배열의 길이가 다를 경우, 더 긴 배열이 크므로 **길이를 비교하여 결과를 반환**합니다.
   - `arr1.length > arr2.length`이면 `1` 반환 (arr1이 더 김).
   - `arr1.length < arr2.length`이면 `1` 반환 (arr2가 더 김).

2. **배열 원소의 합 비교**

   ```jsx
   const sum1 = arr1.reduce((acc, num) => acc + num, 0);
   const sum2 = arr2.reduce((acc, num) => acc + num, 0);
   ```

   - `reduce`를 사용하여 배열의 합을 계산합니다.
   - `reduce((acc, num) => acc + num, 0)`은 배열의 모든 원소를 더하는 역할을 합니다.

3. **합을 비교하여 결과 반환**

   ```jsx
   return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
   ```

   - 두 배열의 합이 같으면 `0` 반환.
   - `sum1`이 크면 `1`, `sum2`가 크면 `1` 반환.
