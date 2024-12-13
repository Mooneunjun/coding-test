> [마지막 두 원소](https://school.programmers.co.kr/learn/courses/30/lessons/181927)

**문제 설명**

정수 리스트 `num_list`가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 2 ≤ `num_list`의 길이 ≤ 10
- 1 ≤ `num_list`의 원소 ≤ 9

---

### 입출력 예

| num_list        | result              |
| --------------- | ------------------- |
| [2, 1, 6]       | [2, 1, 6, 5]        |
| [5, 2, 1, 7, 5] | [5, 2, 1, 7, 5, 10] |

---

### 입출력 예 설명

입출력 예 #1

- 마지막 원소인 6이 그전 원소인 1보다 크기 때문에 6 - 1인 5를 추가해 return합니다.

입출력 예 #2

- 마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 5의 두 배인 10을 추가해 return합니다.

---

```jsx
function solution(num_list) {
  const last = num_list[num_list.length - 1];
  const secondLast = num_list[num_list.length - 2];

  const newValue = last > secondLast ? last - secondLast : last * 2;

  return [...num_list, newValue]; // 원본 배열 불변성 유지
}
```

---

### 코드 설명

1. **리스트에서 마지막 두 원소 추출**:

   `num_list[num_list.length - 1]`를 통해 마지막 원소를,

   `num_list[num_list.length - 2]`를 통해 마지막에서 두 번째 원소를 가져옵니다.

2. **조건에 따른 값 계산**:
   - 만약 마지막 원소(`last`)가 그전 원소(`secondLast`)보다 크다면, 두 원소의 차이를 구한 뒤 해당 값을 `push()` 메서드를 사용하여 `num_list`의 끝에 추가합니다.
   - 마지막 원소가 그전 원소보다 크지 않다면, 마지막 원소를 두 배로 만들고 그 값을 `push()`로 추가합니다.
3. **결과 반환**:

   변경된 `num_list`를 그대로 반환합니다.

이 과정을 통해 조건에 따라 새로운 값을 `num_list`에 유연하게 추가할 수 있습니다.
