//조건문
let number = 5;
if (number > 10) {
  console.log("10보다 크다.");
} else if (number > 0) {
  console.log("0보다 크고 10보다 작다.")
} else {
  console.log("0보다 작다.")
}

// if 뒤 들어가는 것은 조건으로 이해.


//switch
//if, else if 를 계속 쓰면 복잡해지므로
const browser = "IE";
switch(browser) {
  case 'IE':
    console.log('브라우저는 IE입니다.');
    break;
  case "firefox":
    console.log('브라우저는 firefox입니다.');
    break;
  case "chrome":
    console.log('브라우저는 chrome입니다.');
    break;
  }

//case "firefox"
//case "chrome"
//  console.log("브라우저가 firefox 이거나 chrome입니다.");
//  break;
// -> 이렇게 하면 둘 중 하나에 만족할 시 실행됨.