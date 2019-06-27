## props?

부모 컴포넌트 —> 자식 컴포넌트 로 값을 전달

```javascript

/*	App.js	*/
import React, { Component } from 'react';
import './App.css';
import User from '.User';

class App extends Component {
 const username [
    {
      name:"kim",age:29
    },
     {name:"kall",age:31
     }
  ]
  render() {
    return {
      <div classname="App">
      	{username.map((username, index) => {
          return <Admin key={index} name={username.name} age={username.age} />
          //고유의 key 값을 필요로함 ( map 을 사용할 경우 )
        })}
			</div>
    };
  }
}

export default App


/* 	User.js */
import React, { Component } from 'react';
import './Movie.css';

const Admin extesnds Component {
  render() {
    return {
        <h1> Hello {this.props.name}, you R {this.prop.age} old...</h1>
    }
  }
}

export default User

```

### React 

​    App.js 를 통해 데이터를 A.js 파일로 보냄 —> A.js 파일에서 데이터를 활용해서 블록을 만든다 —> 블록을 다시 App.js 에 끼운다 ( 반복 )

### PropType

Prop 의 데어터 type 을 체크하기 위해서는 prop-types 를 설치한다 

```
npm install --save prop-types
```

이후 확인하려는 prop 이 있는 A.js 에

```javascript

/* 	User.js */
import React, { Component } from 'react';
import './Movie.css';

const Admin extesnds Component {
  static propType {
    name : PropType.string,							//prop type -> string 
    age  : PropType.number.isRequired		//prop type -> number and 필수로 있어야한다.
  }
  render() {
    return {
        <h1> Hello {this.props.name}, you R {this.prop.age} old...</h1>
    }
  }
}

export default User


```

