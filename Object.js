const obj = {
  userName : "Kim",
  age : 21,
  graduated : false,
  introduce : function () {
    console.log(`저는 ${this.age}살 ${this.userName}입니다.`)
  },
  graduate : function () {
    this.graduated = true;
  },
};

//일급 함수 : 함수가 값으로 쓰일 수 있음.
console.log(obj);
obj.introduce();
obj.graduate();

console.log(obj);