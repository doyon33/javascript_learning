class Person{
  constructor(name, age) { //생성자 (__init__ in python, 어떤 데이터를 넣을 것인지 정하는 역할), object를 생성할 때 중요한 역할을 한다.
    this.name = name; //해당 object를 가리키는 this, kim.name = 'kim'
    this.age = age;
  }

  speak() {
    console.log(`${this.name}:hello`)
  }
}
const kim = new Person('kim', 21); // kim이 object

const kim1 = {
  name : 'kim',
  age : 21
}

const kim2 = {}

kim2.name = 'kim'

console.log(kim);
console.log(kim.name);
console.log(kim.age);

//class의 instance는 class의 정보를 가자고 있다.
console.log('-----static-----')
class Article {
  static publisher = 'Kim'
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher)
  }
}

const article1 = new Article()
console.log(article1.publisher);
console.log(Article.publisher);
