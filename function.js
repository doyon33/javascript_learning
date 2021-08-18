// function 이름(매개변수1, 매개변수2) {
//   //함수의 로직
//   return 결과
// }

//1. 

//2. 

//3. 함수는 objectd이다(자바스크립트에서)
//자료형처럼 쓸 수 있다는 뜻. 값, 매개변수, 함수의 결과가 될 수 있다.

function printHello() {
  console.log('Hello');
}

printHello()

function log(message) {
  console.log(message)
}

log('Hello!')

//매개변수로 object가 들어갈 때
function changeName(obj) {
  obj.name = 'coder'
  return obj
}

const kim = {name : 'kim'}
coder = changeName(kim)
console.log(coder) // {name : 'coder'}
console.log(kim) //원래 바꾸려고 한 건 아니지만 reference를 전달했기 때문에 원본도 수정됨. //{name:'kim}

function showMessage(message, from='unknown') { //매개변수가 없을 경우의 default 값을 =으로 정함.
  console.log(`${from}으로부터 온 메시지 : ${message}`)
}
showMessage('안녕하세요')

//Rest parameters
function printAll(...args) { //여러개의 매개변수를 받을 수 있다. 매개변수들로 이루어진 배열이 들어옴.
  console.log(args)
  for(let i=0; i<args.length;i++) {
    console.log(args[i])
  }

  console.log('------------------------')

  for (i of args) {
    console.log(i)
  }

  console.log('----------------------')
  args.forEach(function(arg) {  //함수를 arg의 각각의 원소에 대해 실행시키는 배열의 method
    console.log(arg)
  })
}

printAll('banana', 'apple', 'water') //배열로 Print된다.

console.log('----------------------')
//Scope 밖=>안 x 안=>밖o
let globalVar = 'global';
function scope1 () {
  let localVar = 'local';
  console.log(globalVar)
  console.log(localVar)
}
scope1()

console.log('----------------------')
//함수 선언과 함수 표현
//함수 선언
function 함수명 () {
}
//함수 표현
const printHello1 = function() { //함수표현식 : 익명 함수 변수에 할당하는 형태 (익명 함수 : 함수명을 정하지 않은 함수 function(){})
  console.log('Hello')
}
const printHello2 = function print() { //
  console.log('Hello')
  print()
}
// //hoisting
// let은 안되고 var은 undefined이지만 실행은 된다. let은 hoisting 안 되고 var은 된다.
// 함수 선언 식에서는 hoisting이 된다. 함수 표현에서는 hoisting이 안 된다. (에러를 일으켜야 하는데 그러지 않기에 문제가 된다.)
// 그래서 함수 표현 식을 많이 쓴다.

//Callback
function randomQuiz(answer, func1, func2) {
  if (answer ==='!!!') {
    func1() //answer로 !!!이 들어오면 func1을 실행하라.
  } else {
    func2() //아니면 func2를 실행하라.
  }
}
//-> 여기 func1, func2자리에 바로 함수를 넣어도 되는데 왜 이렇게 하냐면 상황에 따라서 함수를 바꿔 넣어 쓸 수 있기 때문이다!!! 이게 바로 콜백 함수.

const printYes = function() {
  console.log('Yes')
}
const printNo = function() {
  console.log('No') //command + d
}

randomQuiz('!!!', printYes, printNo)

//Arrow Function(화살표 함수)
const printHello3 = function() {
  console.log('Hello')
}
// 
const ArrowFunc = () => {
  console.log('Hello')
}
ArrowFunc()

const ArrowEx = (a, b) => a + b
const ArrowEx2 = (a, b) => {
  return a + b
}
console.log(ArrowEx(1,2))