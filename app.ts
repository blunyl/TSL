let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

const result = generateError("An Error occurred", 500);
console.log(result); //오류가 발생할 때 스크립트는 멈춤 , 콘솔에 아무것도 출력되지않음
