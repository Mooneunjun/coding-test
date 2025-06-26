function solution(my_string, queries) {
  let str = [...my_string]; // 문자열을 배열로 변환

  queries.forEach(([start, end]) => {
    // 주어진 구간을 뒤집고 배열에 반영
    const reversedPart = str.slice(start, end + 1).reverse();
    str.splice(start, reversedPart.length, ...reversedPart);
  });

  return str.join(""); // 배열을 문자열로 변환하여 반환
}
