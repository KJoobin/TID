object 는 Key 와 value 로 이루어져 있다.

```javascript
var obj = { key1 : "value",
            key2 : 2,
            key3 : true,
            key4 : function(){ return 3},
			key5 : undefined,
            'ke y6' : null
};
```

key 값은 문자로 이루어져있고,
호출 방법은

```javascript
console.log(obj["key1"]); 	//"value"
console.log(obj.key2);		//2
var x = "key3";
console.log(obj[x]);		//true;
```

또는 

```javascript
for(x in obj) {
    console.log(x);			//key1 ~ ke y6 까지 출력 ( key 값 출력 )
}
```

