//for (값 ; 조건 ; 값이 어떻게 변할지)

for (let i = 3; i > 0; i--) {
  console.log(i);
}
//for i in range(3, 0, -1): ... in python

for (let i = 10; i > 0; i = i -2) {
  console.log(i)
}
//for i in range(10, 0, -2): ... in python

for (let i = 0; i < 30; i = 2 ** i) {
  console.log(i)
}
//30까지 1포함 2의 제곱수를 출력 1, 2, 4, 8, 16 ... problem

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log("i:", i, "j:", j, "mul:", i * j);
  }
}

//continue, break ... same way to use

//while
let i = 3;
while (i > 0) {
  console.log(i);
  i -= 1;
}

for (let i = 3; i > 0; i--) {
  console.log(i);
}

//do while
i = 3;
do {
  console.log(i);
  i -= 1;
  // i--
} while(i > 0);

