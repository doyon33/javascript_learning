//var
var d = 1;
console.log(d);
var d = 2;
console.log(d);

{
  var b = 1;
}
console.log(b);
//스콥 안에서 바깥으로 접근은 가능하지만, 바깥에서 안으로 접근할 수 없다.
//*hoisting*
//but, var는 접근할 수 있다.

//let

//const 상수
const constant = 2;

//constant = 1;

console.log(constant);
//새로운 값을 할당할 수 없음. 수정 가능성이 없는 변수에 사용.


//자료형
//primitive, object
//primitive : 원시 자료형
//Number, string, boolean, undefined, null, symbol
//undefined : 값이 정의되지 않았을 때 들어가는 것
let a = 2;
let text = '3';
let bool = true;

console.log(text + a);
console.log(text / a);

let c = 2 < 3;
console.log(c);

console.log(Boolean(undefined));