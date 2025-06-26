function solution(str_list) {
  const idx = str_list.findIndex((v) => v === "l" || v === "r");

  return str_list[idx] === "l"
    ? str_list.slice(0, idx)
    : str_list[idx] === "r"
    ? str_list.slice(idx + 1)
    : [];
}
