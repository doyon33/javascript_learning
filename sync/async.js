// console.log('1')
// console.log('2')
// console.log('3')
// //1, 2, 3 순서대로 뜨는 건 js가 동기적인 언어이기 때문이다.

console.log('1')
// setTimeout(콜백함수, 시간, )//특정 시간 이후에 콜백 함수가 실행되도록 하는 method.
// 시간은 미리세컨드..?? 20000 이 2초
setTimeout(()=> {
  console.log('2')
}, 2000)
console.log('3')
//setTimeout은 비동기적인 API(함수)이기 때문에, 1, 2, 3 순서로 출력되는 것이 아닌 1, 3, 2 순으로 출력된다.

immediatePrint(()=> {
  console.log('test')
})

function printWithDelay(print, timeout) {
  setTimeout(()=> {
    print()
  },timeout)
}

printWithDelay(()=> {
  console.log('async test')
})

// 비동기적인 함수 안에서 동기적으로 이루어져야 하는 상황일 때
// callback, promise, async await

