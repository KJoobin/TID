### bind

bind : `this` 키워드를 주어진 값으로 설정하고, 앞쪽의 매개변수도 자신의 인자를 사용해 미리 순서대로 채워놓은 새로운 함수를 반환합니다.

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

func.bind(thisArg[, arg1[, arg2[, … ]]])

```javascript
function list() {
    return Array.prototype.slice.call(arguments);
}
var binding = list.bind(undefined,37);
var list1 = binding();
//[37]
var list2 = binding(1,2,3);
//[37,1,2,3]
```

setTimeOut 함수를 사용할때에도 bind 를 이용해야 this 를 사용할수 있다.

```javascript
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;	// 0 ~ 13 사이 난수
}

// 1초 지체 후 bloom 선언
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);		//생성자 this = flower, flower
    													//.declare 의 this 를 flower로
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();
// 1초 뒤, 'declare' 메소드 유발
```

### call

call : 주어진 this 값 및 각각 전달된 인수와 함께 함수를 호출

func.call( thisArg[, arg1[, arg2[, …]]] )

```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log( cheese ) 			//Food {name: "feta", price: 5, category: "food"}
console.log(fun)				//Toy {name : "robot", price : 40, category : "toy"}
```

### apply

call 과 비슷하지만 arg1 arg2 … 을 배열로 받는다는 특징이 있다.

```javascript
function.call(thisArg,arg1,arg2)
function.apply(thisArg,[arg1,arg2])
```

