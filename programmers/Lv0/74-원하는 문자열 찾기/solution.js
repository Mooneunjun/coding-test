function solution(myString, pat) {
  // 대소문자를 구분하지 않으므로 모두 소문자로 변환
  myString = myString.toLowerCase();
  pat = pat.toLowerCase();

  // myString에 pat이 포함되어 있는지 확인
  return myString.includes(pat) ? 1 : 0;
}

console.log(solution("AbCdEfG", "aBc")); // 1
