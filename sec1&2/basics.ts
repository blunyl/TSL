function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number, number2, printResult, resultPhrase);
