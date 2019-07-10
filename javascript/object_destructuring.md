##Destructuring ?

```javascript
/* 어떠한 오브젝트가 있다는 가정 */
const setting = {
    notification : {
        follow : true,
        alert : true,
        unfollow : false
    },
    color : {
        theme : "dark"
    }
};
/* follow 에 접근하고싶으면. */
console.log(setting.notification.follow)		// 의 방법으로 접근할수 있다.
/* if notification 자체가 없을경우 
const setting = {
    color : {
        theme : "dark"
    }
};
위의 방식대로 접근하면 err 가 난다.
*/
```

### Destructuring 사용법 

const { 접근할 구조 = default값 } = target

```javascript
const setting = {
    notification : {
        follow : true,
        alert : true,
        unfollow : false
    },
    color : {
        theme : "dark"
    }
};
const {notification : {follow = false} = {},		
      color : {theme = "light"} = {} } = setting
console.log(follow)								//false;
console.log(theme)								//ligth;
console.log(notification)						// err , 정의 되지 않은 변수

```

 ### Array_destruction

```javascript
const days = ["Mon","Tue","Wed","...","...","...","Sun"]

const [day1,day2,day3,day4 = default] = days;

console.log(day1,day2,day3,day4);
```

### renaming

object destructuring 을 renaming 하겠다.

```javascript
let chosenColor = "black"			//이미 선언되있는 변수

/* 이후에 API 를 불러옴 */

const settings = {
    color : {
        chosen_color : "dark"
    }
};

({color : { chosen_color : chosenColor = "light" }	// 소괄호 ( ) 안에 destructuring 을 선언
} = settings );

console.log( chosenColor )							// dark;

```

