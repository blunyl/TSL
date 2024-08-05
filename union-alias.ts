type Combinable = number | string;
type TypeDesc = "as-number" | "as-text"; //문자열 리터럴 타입

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: TypeDesc
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2; //숫자로 변환후 계산
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
