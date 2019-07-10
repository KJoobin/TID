### var vs let,const

1. 선언

```javascript
var name = "Kim"
var name = "Joo"				//에러가 나지 않는다.
```

하지만 let, const 의 경우 이미 선언되있는걸 선언할경우 에러가 난다.

```javascript
let name = "kim";
let name = "ju";   				//Uncaught SyntaxError: Identifier 'name' has already been declared
```

let vs const

```javascript
let name = "kim";
name = "j";
console.log(name);	//j

const age = 24;
age = 23;			//Uncaught TypeError: Assignment to constant variable.
```

let 의 경우 선언후 값을 바꿀수 있지만 const 의 경우 값을 바꿀수없다

그러나 오브젝트의 경우는 다르다.

```javascript
const person = { name : "kim" }
//person = kim.  <- err
person.name = "j"
console.log(person.name)  	//j;
```

2. hoisting

```javascript
console.log(myName);				//undefined;
var myName = "lala";
/* 에러가 나지 않는 이유는 hoisting 때문이다. 
	hoistiong 을 하였을 경우
 var myName;
 console.log(myName);
 myName = "lala";  	
 let, const의 경우
 */
console.log(yourName);				// Uncaught ReferenceError
let yourName = "gitHub";
```

3. scope
   var 의 경우 function scope
   let,const - block scope



### Default 값은 const 이고 값을 변경 해야할경우 let 을 쓴다 ! 



