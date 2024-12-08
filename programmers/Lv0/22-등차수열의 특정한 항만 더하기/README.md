> [**등차수열의 특정한 항만 더하기**](https://school.programmers.co.kr/learn/courses/30/lessons/181931)

두 정수 `a`, `d`와 길이가 n인 boolean 배열 `included`가 주어집니다. 첫째항이 `a`, 공차가 `d`인 등차수열에서 `included[i]`가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 `included`가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

---

### 제한사항

- 1 ≤ `a` ≤ 100
- 1 ≤ `d` ≤ 100
- 1 ≤ `included`의 길이 ≤ 100
- `included`에는 true가 적어도 하나 존재합니다.

---

### 입출력 예

| a   | d   | included                                         | result |
| --- | --- | ------------------------------------------------ | ------ |
| 3   | 4   | [true, false, false, true, true]                 | 37     |
| 7   | 1   | [false, false, false, true, false, false, false] | 10     |

---

### 입출력 예 설명

입출력 예 #1

- 예제 1번은 `a`와 `d`가 각각 3, 4이고 `included`의 길이가 5입니다. 이를 표로 나타내면 다음과 같습니다.

||1항|2항|3항|4항|5항|

|-|-|---|---|---|---|

|등차수열|3|7|11|15|19|

|included|true|false|false|true|true|

`따라서 true에 해당하는 1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.`

입출력 예 #2

- 예제 2번은 `a`와 `d`가 각각 7, 1이고 `included`의 길이가 7입니다. 이를 표로 나타내면 다음과 같습니다.

||1항|2항|3항|4항|5항|6항|7항|

|-|-|---|---|---|---|---|---|

|등차수열|7|8|9|10|11|12|13|

|included|false|false|false|true|false|false|false|

`따라서 4항만 true이므로 10을 return 합니다.`

---

```jsx
function solution(a, d, included) {
  let sum = 0;
  for (let i = 0; i < included.length; i++) {
    // i번째 인덱스에서의 항: a + i*d (i는 0부터 시작, 항 번호는 1부터)
    // included[i]가 true이면 해당 항을 sum에 추가
    if (included[i]) {
      sum += a + i * d;
    }
  }
  return sum;
}
```

### 코드 설명

1. **초기 설정**
   - `sum` 변수를 0으로 초기화합니다. 이 변수는 true인 항들만 골라 더한 총합을 저장합니다.
2. **반복문을 사용한 등차수열 항 계산**
   - 등차수열의 n번째 항은 일반적으로 `a + (n-1)*d`로 정의됩니다.
   - 문제에서는 인덱스를 0부터 시작하기 때문에, `i`번째 인덱스에 해당하는 항은 `(i+1)`번째 항이 됩니다.
   - 따라서 `(i+1)`번째 항은 `a + i*d`로 계산할 수 있습니다.
3. **`included` 배열에 따른 조건 처리**
   - `included` 배열은 true/false 값을 가지며, true일 경우 해당 항을 sum에 더해야 합니다.
   - `if (included[i])`를 통해 i번째 항이 포함되어야 하는지 확인하고, true이면 `sum += a + i*d;`를 수행합니다.
4. **결과 반환**
   - 모든 항을 검사한 뒤 sum을 반환합니다.
   - 문제 제한사항에 따라 included에는 true가 적어도 하나 존재하므로 sum은 최소 하나 이상의 항의 값이 더해진 결과가 됩니다.
