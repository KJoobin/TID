### this 의 n가지 활용법 

1. 기본 this 

   ```javascript
   console.log(this)							//window{}
   ```

2. 함수에서의 this

   ```javascript
   function a() { console.log(this) }	
   a()											//window{}
   ```

3. object 에서의 this

   ```javascript
   var obj = {
       a : function() { console.log(this) },
       b : "hi"
   };
   obj.a()										// obj 
   // 그러나 호출하는 함수가 객체의 메서드인지 그냥 함수인지가 중요
   var c = obj.a
   console.log( c() )							// window{}
   
   ```

   object 에서의 this 는  obj 를 가르킨다. 

   ```javascript
   var obj = {
       a : function() { this.b = "hi" }
   };
   obj.a()
   console.log(obj)							// { a : f, b:"hi" }
   ```

4. bind , call, apply 에서의 this
   bind : this 키워드를 주어진 값으로 설정하고, 앞쪽의 매개변수도 자신의 인자를 사용해 미리 순서대로 채워놓은 함수를 반환한다.
   call : 주어진 this 값 및 각각 전달된 인수와 함께 함수를 호출합니다
   apply : call 과 비슷하지만  call 은 인수 리스트를 받는데 apply 는 인수들의 단일 배열을 받는다.

   ```javascript
   var obj = {
       a : function() { console.log(this) },
       b : "hi"
   };
   obj.a()										// obj 
   // 그러나 호출하는 함수가 객체의 메서드인지 그냥 함수인지가 중요
   var c = obj.a
   console.log( c() )							// window{}
   var bindObj = c.bind(obj);					//.bind = .call = .apply 값이 같음
   console.log( bindObj() );					// obj
   ```

5. 생성자 의 경우 

   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   Person.prototype.sayHi = function() {
     console.log(this.name, this.age);
   }
   
   
   var Kim = new Person('Kim',24);				// new 를 붙히지 않을경우
   											//window.name,window.age 로 정의된다.
   console.log(Kim)							//Person {name: "Kim", age: 24}
   Kim.sayHi()									// Kim 24
   ```

   new 를 붙히지 않을경우를 대비하여 ES6 에서 class 의 개념이 도입

6. DOM 에서의 경우

   ```javascript
   document.querySelector('div').onclick = function() {
       console.log(this);								//div
   }
   ```

   DOM 에서의 경우 this 는 query 로 선택한 인자이다.