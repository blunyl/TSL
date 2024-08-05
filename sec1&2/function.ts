function add(n1: number, n2: number) {
  return n1 + n2;
}

//반환값이 없어 void로 간주
function printResult(num: number) {
  console.log("Result: ", +num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add; //함수참조
console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
