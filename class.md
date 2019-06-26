## class ?

​    class = 청사진
청사진 만으로 차가 달리거나 비행기가 날거나 할수없다  —> 설계도

```javascript
class Name {
  constructor(arg1,arg2,...age) {
    this.key1 : value;
    this.key2 : value;
  }
}
/* 선언하는법 */

const Kjoobin = new Name(arg1,arg2,...arg);

/*instance화 하다.. --> Kjoobin : instance */
```

### class 를 사용하는 이유?



### class extends

class 를 확장하는 개념

```javascript
class User {
  constructor (name,email,pw) {
   this.name = name;
   this.email = email;
   this.pw = pw;
  }
}
const ju = new User('kimj', 'KJoobin', 1234)

class Admin extends User {
	deleteUser() {
	  console.log(`Deleting the ${this.email}....`)
	}
}

const delUser = new Admin('kimj', 'KJoobin', 1234);

delUser.deleteUser()										//Deleting the KJoobin....
```

### Add constructor in extended class

extend 로 확장된 class 에 constructor 을 추가하고 싶을경우 super() 함수를 시용한다.

```javascript
class User {
  constructor (name,email,pw) {
   this.name = name;
   this.email = email;
   this.pw = pw;
  }
}
const ju = new User('kimj', 'KJoobin', 1234)
/* Admin 함수에 nickname 값을 받아서 추가하고 싶을경우 */
class Admin extends User {
  constructor(name,email,pw,nickname) {
    super(name,email,pw);											//super 
    this.nickname = nickname;
  }
	deleteUser() {
	  console.log(`Deleting the ${this.email}....`)
	}
}

const delUser = new Admin('kimj', 'KJoobin', 1234,'kidney bean');

delUser.deleteUser()
console.log(delUser)
```

### object structuer 를 이용한 class 인자 넘기기

```javascript
class User {
  constructor ({name,email,pw}) {
   this.name = name;
   this.email = email;
   this.pw = pw;
  }
}
const ju = new User({
  name:'kimj',
  email:'KJoobin',
  pw:1234})
/* Admin 함수에 nickname 값을 받아서 추가하고 싶을경우 */
class Admin extends User {
  constructor({name,email,pw,nickname}) {
    super({name,email,pw});											//super 
    this.nickname = nickname;
  }
	deleteUser() {
	  console.log(`Deleting the ${this.email}....`)
	}
}

const delUser = new Admin({
  name:'kimj', 
  email:'KJoobin',
  pw:1234,
  nickname:'kidney bean'});

delUser.deleteUser()
console.log(delUser)
```

