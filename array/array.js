//array 선언
const arr1 = new Array();
const arr2 = [1, 2, 3];

//Index position
console.log(arr2);
console.log(arr2.length); //len(arr2) in python
console.log(arr2[1]);
console.log(arr2[arr2.length-1]); //last

console.log('-----------------')
//looping
for(let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
console.log('-----------------')
for (element of arr2) {
  console.log(element);
} //최솟값 index부터 끝까지 순서대로. value of array
console.log('-----------------')
arr2.forEach(function(element) {
  console.log(element)
}) //함수를 매개변수로 받는다. 매개변수로 들어가는 함수를 call back함수라고 한다.
// arr2.forEach(element) => {
//   console.log(element)
// }

// console.clear()
console.log('------push-----')
arr2.push(4) // list.append(value) in python
console.log(arr2)
arr2.pop()
console.log(arr2) // 뺐다가 넣었다가만 하는 것.

// console.clear()
arr2.unshift(0) // 맨 앞에 추가
console.log(arr2)
arr2.shift(0) // 맨 앞에 추가
console.log(arr2)
//shift, unshift는 사용하지 않는 것이 좋다. / 느리기 때문. / 맨 앞에 넣고 빼기 때문에 인덱스의 재설정이 필요하기 때문.
console.clear()
arr2.push(4, 5);
arr2.splice(1, 2);
console.log(arr2);
arr2.splice(1, 1, 11, 12, 13);
console.log(arr2); //[1, 11, 12, 13, 3, 4, 5]

//searching
console.log(arr2.indexOf(1)); //
console.log(arr2.indexOf(100)); // 없을 때는 -1이 나온다.
//** */

// console.log(arr2.lastIndexOf(1)) //뒤에서부터 셀 때
console.log(arr2.includes(100)); //false, value가 배열에 있는지 여부를 알려줌.

const arr3 = arr2.concat([6, 7])
console.log(arr3)

console.log(arr2.every(element => element >= 1))

//~ 의 뜻은 -(n+1)
//! = not이라는 의미.
// !~12 = false, !!~12 = ture
//* 이거 다시 생각해보기 ..............
var arr = [1, 2, 3]
if (!~arr2.indexOf('5'))

let condition 

if (arr.indexOf == -1) {
  condition = true
} else {
  condition = false
}
if (condition) {

}