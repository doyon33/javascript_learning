//논리연산자
// ||(or), &&(and), !(not)

console.log()

nullableObject = null;
nullableObject


console.log(0 == "0"); //true
console.log(0 === "0"); //false
console.log(0 == ""); //true
console.log(0 === ""); //false
// ===는 자료형까지 보기 때문에 0===false;는 결괏값이 false로 나온다.

//?
//(조건 ? a : b) => 조건이 true-> print a / 조건이 false-> print b
//js에서는 함수가 값이 될 수 있기 때문에, a, b자리에 함수를 넣을 수 있다.
let name = "Kim";
console.log(name === "Kim" ? "true":"false");

