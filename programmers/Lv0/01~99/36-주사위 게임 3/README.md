> [주사위 게임 3](https://school.programmers.co.kr/learn/courses/30/lessons/181916)

### **문제 설명**

1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

- 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
- 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q) 점을 얻습니다.
  2
- 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
- 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
- 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.

네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 `a`, `b`, `c`, `d`로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- `a`, `b`, `c`, `d`는 1 이상 6 이하의 정수입니다.

---

### 입출력 예

| a   | b   | c   | d   | result |
| --- | --- | --- | --- | ------ |
| 2   | 2   | 2   | 2   | 2222   |
| 4   | 1   | 4   | 4   | 1681   |
| 6   | 3   | 3   | 6   | 27     |
| 2   | 5   | 2   | 6   | 30     |
| 6   | 4   | 2   | 5   | 2      |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번에서 네 주사위 숫자가 모두 2로 같으므로 1111 × 2 = 2222점을 얻습니다. 따라서 2222를 return 합니다.

입출력 예 #2

- 예제 2번에서 세 주사위에서 나온 숫자가 4로 같고 나머지 다른 주사위에서 나온 숫자가 1이므로 (10 × 4 + 1) = 41 = 1681점을 얻습니다. 따라서 1681을 return 합니다.
  2
  2

입출력 예 #3

- 예제 3번에서 `a`, `d`는 6으로, `b`, `c`는 3으로 각각 같으므로 (6 + 3) × |6 - 3| = 9 × 3 = 27점을 얻습니다. 따라서 27을 return 합니다.

입출력 예 #4

- 예제 4번에서 두 주사위에서 2가 나오고 나머지 다른 두 주사위에서 각각 5, 6이 나왔으므로 5 × 6 = 30점을 얻습니다. 따라서 30을 return 합니다.

입출력 예 #5

- 예제 5번에서 네 주사위 숫자가 모두 다르고 나온 숫자 중 가장 작은 숫자가 2이므로 2점을 얻습니다. 따라서 2를 return 합니다.

---

아래는 격식을 맞춰 작성한 **최종 코드 및 설명**입니다.

---

### **코드**

```jsx
function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  const counts = {};

  // 각 숫자의 빈도를 계산
  for (const num of dice) {
    counts[num] = (counts[num] || 0) + 1;
  }

  const uniqueNumbers = Object.keys(counts).map(Number);
  const frequencies = Object.values(counts);

  // 케이스별 점수 계산
  switch (frequencies.length) {
    case 1:
      // 네 주사위 숫자가 모두 같은 경우
      return 1111 * uniqueNumbers[0];

    case 2:
      if (frequencies.includes(3)) {
        // 세 주사위 숫자가 같고 나머지 하나가 다른 경우
        const p = uniqueNumbers.find((num) => counts[num] === 3);
        const q = uniqueNumbers.find((num) => counts[num] === 1);
        return (10 * p + q) ** 2;
      } else {
        // 두 쌍의 주사위가 같은 경우
        const [p, q] = uniqueNumbers;
        return (p + q) * Math.abs(p - q);
      }

    case 3:
      // 한 쌍의 주사위가 같고 나머지 두 숫자가 다른 경우
      const [q, r] = uniqueNumbers.filter((num) => counts[num] === 1);
      return q * r;

    case 4:
      // 네 주사위 숫자가 모두 다른 경우
      return Math.min(...uniqueNumbers);
  }
}
```

---

### **코드 설명**

### **1. 숫자의 빈도 계산**

```jsx
const counts = {};

for (const num of dice) {
  counts[num] = (counts[num] || 0) + 1;
}
```

- **목적**:
  - 주사위에서 나온 각 숫자가 몇 번 등장했는지를 계산하여 `counts` 객체에 저장합니다.
- **작동 방식**:
  - `dice` 배열을 순회하며 숫자의 빈도를 기록합니다.
  - `counts[num]`이 존재하면 1씩 증가하고, 없으면 1로 초기화합니다.
- **예제**:
  - 입력: `dice = [4, 4, 6, 6]`
  - 결과: `counts = { 4: 2, 6: 2 }`.

---

### **2. 고유 숫자와 빈도 배열 생성**

```jsx
const uniqueNumbers = Object.keys(counts).map(Number);
const frequencies = Object.values(counts);
```

- **고유 숫자**:
  - `Object.keys(counts)`를 사용해 나온 숫자를 추출합니다.
  - `map(Number)`로 문자열을 숫자로 변환하여 배열로 저장합니다.
- **빈도 배열**:
  - `Object.values(counts)`를 통해 각 숫자가 나온 빈도를 배열로 저장합니다.
- **예제**:
  - 입력: `counts = { 4: 3, 1: 1 }`
  - 결과: `uniqueNumbers = [4, 1]`, `frequencies = [3, 1]`.

---

### **3. 케이스별 점수 계산**

각 케이스는 `frequencies.length` 값(고유 숫자의 개수)에 따라 분기됩니다.

---

### **Case 1: 네 숫자가 모두 같은 경우**

```jsx
case 1:
  return 1111 * uniqueNumbers[0];

```

- **판별 기준**:
  - `frequencies.length === 1` → 모든 숫자가 동일.
  - 예: `dice = [2, 2, 2, 2]` → `frequencies = [4]`.
- **점수 계산**:
  - 점수는 `1111 * 고유 숫자`.
  - 예: `1111 * 2 = 2222`.

---

### **Case 2: 세 숫자가 같고 나머지 하나가 다른 경우**

```jsx
if (frequencies.includes(3)) {
  const p = uniqueNumbers.find((num) => counts[num] === 3);
  const q = uniqueNumbers.find((num) => counts[num] === 1);
  return (10 * p + q) ** 2;
}
```

- **판별 기준**:
  - `frequencies.includes(3)` → 빈도 배열에 `3`이 포함되어 있으면 세 숫자가 같음.
  - 예: `dice = [4, 4, 4, 1]` → `frequencies = [3, 1]`.
- **점수 계산**:
  - `(10 * p + q) ** 2`.
  - `p`: 세 번 나온 숫자.
  - `q`: 한 번 나온 숫자.
  - 예: `(10 * 4 + 1) ** 2 = 1681`.

---

### **Case 2: 두 쌍의 숫자가 같은 경우**

```jsx
const [p, q] = uniqueNumbers;
return (p + q) * Math.abs(p - q);
```

- **판별 기준**:
  - `frequencies.length === 2`이고, 각 빈도가 `2`.
  - 예: `dice = [6, 6, 3, 3]` → `frequencies = [2, 2]`.
- **점수 계산**:
  - `(p + q) * Math.abs(p - q)`.
  - `p`, `q`: 두 쌍의 숫자.
  - 예: `(6 + 3) * |6 - 3| = 27`.

---

### **Case 3: 한 쌍의 숫자가 같고 나머지 두 숫자가 다른 경우**

```jsx
const [q, r] = uniqueNumbers.filter((num) => counts[num] === 1);
return q * r;
```

- **판별 기준**:
  - `frequencies.length === 3`이고, 빈도가 `1`인 숫자가 두 개.
  - 예: `dice = [2, 2, 5, 6]` → `frequencies = [2, 1, 1]`.
- **점수 계산**:
  - `q * r`.
  - `q`, `r`: 각각 빈도가 1인 숫자.
  - 예: `5 * 6 = 30`.

---

### **Case 4: 네 숫자가 모두 다른 경우**

```jsx
return Math.min(...uniqueNumbers);
```

- **판별 기준**:
  - `frequencies.length === 4` → 모든 숫자가 다름.
  - 예: `dice = [6, 4, 2, 5]` → `frequencies = [1, 1, 1, 1]`.
- **점수 계산**:
  - 고유 숫자 중 가장 작은 값 반환.
  - 예: `Math.min(6, 4, 2, 5) = 2`.

---

### **코드 동작 요약**

1. **`counts`를 이용해 숫자의 빈도 계산**:
   - 주사위 숫자가 몇 번 나왔는지를 기록합니다.
2. **고유 숫자와 빈도 배열 생성**:
   - `uniqueNumbers`와 `frequencies`를 통해 고유 숫자 개수와 각 숫자의 빈도를 판단합니다.
3. **케이스별 분기 처리**:
   - 각 `frequencies.length` 값에 따라 케이스를 분기합니다.
   - **Case 1**: 모든 숫자가 같을 때.
   - **Case 2**: 세 숫자가 같거나, 두 쌍의 숫자가 같을 때.
   - **Case 3**: 한 쌍의 숫자가 같고, 나머지가 다를 때.
   - **Case 4**: 네 숫자가 모두 다를 때.
4. **결과 반환**:
   - 조건에 따라 계산된 점수를 반환합니다.
