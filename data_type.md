###Primitive type

변수에 할당될 때 메모리 상에 고정된 크기로 저장되고 해당 변수가 원시 데이터 값을 보관.

number, string, boolean, null, **undefined**

```javascript
var x = 100;
var y = x;
x = 99;
console.log(y) // 100
```



### Reference type

크기가 정해져 있지 않고 변수에 할당될 때 값이 직접 해당 변수에 저장될수 없으며, 변수에는 데이터에 대한 참조만 저장
참조 : 참조 타입 데이터의 주소 ( Not 데이터의 값 )

객체, 배열, 함수

```javascript
var x = [0,1,2];
var y = x;
x[1] = 5;
console.log(y) 	//[0,5,2]
```

