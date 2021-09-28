// state(상태) : pending(기능을 수행중인 상태) -> fulfilled(기능이 완료된 상태) or rejected(기능이 실패된 상태)
// producer(정보 제공) vs consumer(정보 소비)

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // 무거운 작업을 할 때 ex 네트워크에서 자료를 가져오거나 파일을 읽는 작업
  console.log('doing something');
  setTimeout(() => {
    resolve('결과') // resolve를 통해 결과를 전달해줌. resolve는 결과를 전달하겠다는 뜻.
  }, 2000) //setTimeout, promise 비동기 API로 되어있는 경우가 많다
}) // promise는 정의하자마자 실행된다.

// 2. Consumer(then, catch, finally)
promise
  .then((value) => {
    console.log(value) //value는 매개변수라서 변수명은 어떻게 해도 상관이 없다.
    //resolve의 결과값은 then으로 받고, reject는 catch로 받는다.
  }) // promise가 이루어지고 나서 값이 전달되어 실행된다.
  .catch(error => {
    console.log(error)
  }) // 실패했을 때 이것을 실행한다.
  .finally(() => {
    console.log('완료')
  }) // 모든 것이 다 실행되고 나서 실행된다.

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
}) // 이것이 producer

fetchNumber
  // .then(num => num+1) //화살표 함수에서 중괄호 쓰지 않으면 화살표 뒤의 값이 바로 return
  // //매개변수 num에 1이 들어감. => 1+1 = 2
  // .then(num => console.log(num))
  //그 다음 then 여기에서 2가 출력됨.
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    // 작업들 . ... ...
    // 작업들을 동기/비동기로 나누기 위해서 사용함.
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num-1), 2000)
    }) //Promise를 return할 수 있다.
  })
  .then(num => console.log(num))

// 4. Promise Chaining Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000)
  }) // => 이건 화살표함수고 () => {} return을 쓰지 않아도 된다.
const getEgg = hen => //hen은 매개변수(파라미터)
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => egg`), 1000)
    setTimeout(() => reject(new Error(`Error! ${hen} => 계란`)), 1000) // error말고 그냥 string 써도 됨!
  })
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이`), 1000)
  })

getHen() //return된 값이기 때문에 이렇게 적어야 실행이 된다.
  .then(hen => getEgg(hen))
  .catch(error => {
    return '빵'
  })// 닭이 없는데도 요리를 하고 싶을 때(resolve된 값이 없을 때 return으로 값을 넘겨줌.)
  .then(egg => cook(egg)) // then의 괄호 안에 있는 것도 화살표 함수
  
  // ==
  // .then(function (egg) {
  //   return cook(egg)
  // })

  //then은 함수를 매개변수로 받는 함수인데, 매개변수에 해당하는 함수의 매개변수에 그 전에 실행했던 resolve가 들어간다.
  .then(meal => console.log(meal))
  .catch(error => console.log(error))