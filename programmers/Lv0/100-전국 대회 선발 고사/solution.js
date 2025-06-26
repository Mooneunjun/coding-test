/**
 * 전국 대회 선발 고사 - 다양한 풀이법 비교
 */

// ============================================
// 방법 1: 함수형 프로그래밍 (추천 ⭐⭐⭐)
// ============================================
function solution1(rank, attendance) {
  /**
   * 함수형 접근법의 장점:
   * - 체이닝으로 한 번에 읽기 쉬움
   * - 각 단계가 명확하게 분리됨
   * - 불변성을 유지하며 데이터 변환
   */
  return rank
    .map((rankValue, studentIndex) => ({ rankValue, studentIndex })) // 1. 학생 정보 객체화
    .filter((student) => attendance[student.studentIndex]) // 2. 참석 가능한 학생만 필터링
    .sort((a, b) => a.rankValue - b.rankValue) // 3. 등수 기준 오름차순 정렬
    .slice(0, 3) // 4. 상위 3명만 선택
    .reduce((result, student, index) => {
      // 5. 최종 계산
      const multiplier = [10000, 100, 1][index]; // 각 순위별 가중치
      return result + student.studentIndex * multiplier;
    }, 0);
}

// ============================================
// 방법 2: 직관적인 배열 활용 (이해하기 쉬움 ⭐⭐)
// ============================================
function solution2(rank, attendance) {
  /**
   * 직관적 접근법의 장점:
   * - 코드 흐름이 명확함
   * - 초보자도 이해하기 쉬움
   * - 디버깅이 용이함
   */
  const attendableStudents = [];

  // 참석 가능한 학생들의 정보를 수집
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      attendableStudents.push({
        studentNumber: i,
        rank: rank[i],
      });
    }
  }

  // 등수 기준으로 정렬 (낮은 등수 = 높은 순위)
  attendableStudents.sort((a, b) => a.rank - b.rank);

  // 상위 3명의 학생 번호로 결과 계산
  const [first, second, third] = attendableStudents;
  return (
    first.studentNumber * 10000 +
    second.studentNumber * 100 +
    third.studentNumber
  );
}

// ============================================
// 방법 3: 원라이너 (간결함 ⭐)
// ============================================
function solution3(rank, attendance) {
  /**
   * 원라이너 접근법:
   * - 매우 간결함
   * - 함수형 프로그래밍의 극치
   * - 가독성은 떨어질 수 있음
   */
  return rank
    .map((r, i) => [r, i])
    .filter(([, i]) => attendance[i])
    .sort(([a], [b]) => a - b)
    .slice(0, 3)
    .reduce(
      (sum, [, studentNum], idx) => sum + studentNum * [10000, 100, 1][idx],
      0
    );
}

// ============================================
// 방법 4: Map 사용 (기존 방법)
// ============================================
function solution_original(rank, attendance) {
  const rankMap = new Map();
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      rankMap.set(rank[i], i);
    }
  }
  const sortedRank = Array.from(rankMap.entries()).sort((a, b) => a[0] - b[0]);
  return sortedRank[0][1] * 10000 + sortedRank[1][1] * 100 + sortedRank[2][1];
}

// ============================================
// 성능 비교 및 테스트
// ============================================

/**
 * 추천하는 해결법: solution1 (함수형 프로그래밍)
 *
 * 이유:
 * 1. 가독성이 좋음 - 각 단계가 명확히 보임
 * 2. 유지보수 용이 - 각 체이닝 단계를 독립적으로 수정 가능
 * 3. 모던 JavaScript 스타일 - ES6+ 문법 활용
 * 4. 함수형 프로그래밍 패러다임 - 부작용 없는 순수 함수
 */

// 모든 해결법으로 테스트
const testCases = [
  [
    [3, 7, 2, 5, 4, 6, 1],
    [false, true, true, true, true, false, false],
  ], // 예상: 20403
  [
    [1, 2, 3],
    [true, true, true],
  ], // 예상: 102
  [
    [6, 1, 5, 2, 3, 4],
    [true, false, true, false, false, true],
  ], // 예상: 50200
];

console.log("=== 성능 및 결과 비교 ===");
testCases.forEach((testCase, index) => {
  const [rank, attendance] = testCase;

  console.log(`\n테스트 케이스 ${index + 1}:`);
  console.log(`방법1 (함수형): ${solution1(rank, attendance)}`);
  console.log(`방법2 (직관적): ${solution2(rank, attendance)}`);
  console.log(`방법3 (원라이너): ${solution3(rank, attendance)}`);
  console.log(`기존방법 (Map): ${solution_original(rank, attendance)}`);
});
