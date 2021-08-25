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
//primitive : 원시 자료형, 값 자체가 메모리에 저장
//const a = 10; ==> 값이 메모리에 저장됨.
//Number, string, boolean, undefined, null, symbol

let a = 2;
let text = '3';
let bool = true;

console.log(text + a);
console.log(text / a);

let c = 2 < 3;
console.log(c);

console.log(Boolean(undefined));

//null : 의도적으로 들어가지 않은 값 -> false
//undefined : 변수 선언했는데 값이 할당되지 않은 것
if (!null) {
  console.log("안녕하세요")
}

//number : 숫자, 정수형 x
console.log(1 + 1); //2
console.log(1 - 1); //0
console.log(4 / 3); //1.333
console.log(2 * 2); //4
console.log(4 % 3); // 1
console.log(parseInt(4/3)); // 1
console.log(2 ** 3); //8
let counter = 10;
let aa = counter++; //aa = counter -> 
console.log(aa);

let bb = ++counter;
console.log(bb);

//string
const long_text = "welkfjdsklefja\
ekfjlakwfe\
fjlesjlwkeaje";
console.log(long_text);
const sentence = "Lorem ipsum dolor sit amet, consectetur sit adipiscing elit.";

//문자 접근
const apple = "apple";
console.log(apple[1]);
console.log(apple.charAt(1));

//문자열 비교
console.log("a" < "b"); //true
console.log("A" < "a"); //true

// 문자열 메소드
console.log(apple.length); //=len(apple) 중요!!

//includes()
console.log(sentence.includes('sit')); //true

//startsWith(), endsWith()
console.log(sentence.startsWith("Lorem"));
console.log(sentence.endsWith("elit")) //false
console.log(sentence.endsWith("elit", 55)) //length of sentence

// indexOF(), lastIndexOf()
console.log(sentence.indexOf("sit"));
console.log(sentence.lastIndexOf("sit"));

// replace()
console.log(sentence.replace("sit", "!!!")); //하나만 바꿔줌

// replaceAll()
//console.log(sentence.replaceAll("sit", "!!!")); //모두 교체

//slice(), substring()
console.log(sentence.slice(2, 5));
console.log(sentence.substring(2, 5)); //if a>b, substring will swap a and b

// split()
console.log(sentence.split(" ")[2]);

//toLowerCase(), toUpperCase()
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// trim()
const text2 = "             summer!!        "
console.log(text2);
console.log(text2.trim());

//Object type(reference type) => mutable
//Object, Array, Tuple, Set, Map
//primitive와 달리 value가 아닌 reference가 저장됨.
//const Array = [1,2]; -->인덱스를 지정해서 배열 안의 값을 바꿀 수 있다! 그건 value를 저장한 것이 아니라 reference를 저장한 것이기 때문.

const list1 = [1,2];
const hd = list1 ;

// const hd[1] = 0;
// console.log(hd);
