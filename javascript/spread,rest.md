## Spread ? 

```javascript
const friends = [1,2,3,4]
console.log(friends);		//[1,2,3,4] -> arr 가 찍힘
console.log(...friends);	//1,2,3,4   -> arr 속 value 가 찍힘
```



###In object

```javascript
const nomad = {
    name : 'kim',
    age : 24
}
const code = {
    jab : 'programer',
    pay : '1200$'
}

console.log({ ...nomad })		// { name : 'kim', age : 24 };
console.log({...nomad,...code })// {name : 'kim', age : 24, job : 'programer', pay : '1200$' }
```

### Value 값을 입력받아서 object 에 넣을경우

```javascript
const lastname = prompt( "Last name ?");

const user = {
    username : 'nico',
    age : 25,
    ...(lastname !== "" && { lastname } )
};

console.log(user)		// { username : nico, age : 25, lastname : (value_lastname) }
```

## rest

```javascript
const foods = (aFood,...arg) => {
  console.log(`favorite food is ${aFood} :)`);
  console.log(`but i like ${arg} :) `);
}

const myFavoriteFood = ['kimchi', 'burger', 'pizza', 'meat']

food(myFavoriteFood);		//aFood -> kimchi/ age -> burger,pizza,meat ....

```

### in object, add key,value or remove key,value

```javascript
const user = {
    name : 'kim',
    age : 24
}

const add = ({country = "KR", ...rest}) => ({country,...rest});

console.log(add(user));

const remove = ({country,...rest}) => ({...rest})

console.log(remove(user));

const rename = ({age : aGe, ...rest}) => ({aGe,...rest})

console.log(rename(user));
```

