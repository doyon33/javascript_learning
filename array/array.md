## array

배열을 생성할 때 사용하는 리스트 형태의 객체.<br>Javascript에서 배열 요소의 자료형이 고정되어 있지 않다.

`````js
//array 선언
const array1 = [1, 2, 3]
const fruits = ['사과', '포도']
const array2 = [1, 'a', 2]
`````

#### array method

1. **인덱스**

   ````js
   console.log(array1[0]); //1
   let last = fruits[fruits.length - 1] //포도
   ````

   

2. **배열의 길이**

   ````javascript
   console.log(array1.length); //3
   ````

3. **순환하며 출력**

   ````javascript
   
   ````

4. **배열의 마지막에 항목 추가, 제거**

   ````javascript
   array1.push(4); //array1 = [1, 2, 3, 4]
   
   ````

5. **배열 맨 앞에 항목 추가, 제거**

6. **인덱스 위치에 있는 항목 제거/추가**

7. **배열 항목의 인덱스 찾기**

8. **항목이 배열에 존재하는지의 여부**

9. **두 개 이상의 배열을 합치기**

10. 

    ****

    some<br>특정 콜백 함수가 배열의 어떤 항목에 대해 true를 리턴하는지 알아낸다. 함수는 최대 3개의 값을 파라미터로 받는다. 

    ````js
    var testArray = ['a', 'b', 'c', 'd'];
    testArray.some(function (item, index, array) {
      console.log(index + "번째 요소 : "+item);
      return !!~item.search('b')
    })
    //로그에 찍히는 내용
    //0번째 요소 : aaa
    //1번째 요소 : bbb
    
    //true를 리턴하는 콜백이 있었으므로 리턴값은 true
    true
    ````

    reduce<br>배열의 모든 항목에 대해서 내림차순으로 특정 콜백 함수를 부른다. 콜백함수의 반환값은 축적된 값으로, 콜백함수의 다음 부름ㅇ

    ````javascript
    ````

    

    

    ****



some, reduce, filter
