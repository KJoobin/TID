### ES6 Arrow function

function vs arrow function : 기능은 달라지지 않음, 모양만 바뀜

```javascript
const name = ['k','i','m'];
function addHeart(item) {
    return item + " * ";
}
const heart = name.map(addHeart);
console.log(heart) 					//['k * ','i * ','m * '];
```

arrow function 으로 간단히 쓸 경우

```javascript
const name = ['k','i','m'];
const heart = name.map( item => item + ' * ');	//implicit return
/*
arg 가 2개 이상일 경우 (item, index, ....)
내부에서 return 만 실행하지 않을경우 => { 
console.log(item)
return item + ' * ' ;
}*/
console.log(heart) 					//['k * ','i * ','m * '];
```



**Arrow function 에서의 this **

```javascript
const button = document.querySelector('burron');
button.addEventListener('click',function() {
    this.innerHTML = 'change'					//this -> button But arrow function 을 사용할경우 this -> window;
})
```



```javascript
const person = {
name : 'kim',
age : 24,
addAge : function() {
    this.age++;
}}

console.log(person.age)	//24
person.addAge();		//arrow function 을 사용할경우 age 값이 증가하지않는다
console.log(person.age) //25
```



.filter : 실행값 -> true 인것만 array 로 저장

.forEach -> 각 인자를 실행 

.map -> 각 인자를 실행 ->  array 로 반환

 ( obj 를 console 로 찍을경우 -> console.table(obj) ) 시도해볼것

**Default 값 존재**

```javascript
function sayHi(aName) {
return "hello" + aName;		// 'hello' + (aName || 'anon') 으로 default 값 만든다.
}
console.log(sayHi())		//hello undefined;
/* but arrow function 은 default 값 설정 가능  */
const sayHi = (aName = 'anon') => "hello" + aName
console.log(sayHi())
```

