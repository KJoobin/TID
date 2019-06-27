## states ? 

react 는 cycle event 가 있다..

### Lifecycle Events on React

```
render -> componentWillMount() -> render() -> componentDidMount()
					//API 신청,DATA 작업   -> render   -> 그 이후 작업
Update -> componentWillReceiveProps() -> shouldComponentUpdate() -> 
//				receive new prop						-> check old prop and new prop
componentWillUpdate() -> render() -> componentDidUpdate()
-> do update					->  render 	-> 그 이후 작업
```

### states ?

states 로 설정된 값이 바뀌면 render 을 다시시작한다. ( typeof obj ) 

```javascript

/* 	User.js */
import React, { Component } from 'react';
import './Movie.css';

const Admin extesnds Component {
  static propType = {
    name : PropType.string,							//prop type -> string 
    age  : PropType.number.isRequired		//prop type -> number and 필수로 있어야한다.
  }
  state = {
    greet : "Hello world"
  }
  render() {
    return {
        <div> {this.state}</div>
        <h1> Hello {this.props.name}, you R {this.prop.age} old...</h1>
    }
  }
}

export default User
```

### 값을 변경하는법

```javascript
this.state.greet = 'blablablbal'
```

  와같은 형식으로 변경을 하면 직접적으로 변경하지 말라는 err 를 뱉어낸다

**setState()**

```javascript
this.setState({greet : "blablabla"})
```

  와 같이 setState 로 변경을 해야한다.

### Loading states

   값을 가지고 오기전에 loading motion 을 취하고 가져오면 render 하는 방법

```javascript

/*	App.js	*/
import React, { Component } from 'react';
import './App.css';
import User from '.User';

class App extends Component {
    state = { }
  componentDivMount () => {
    setTimeout( ()=> {
      this.setState({
				username : [{
          name:"kim",age:29
        },
         {
           name:"kall",age:31
      	}]
    	})
    },3000)			//3초뒤 state 의 값이 바뀐다.
  }
  _renderMove = () => {					//func 이름에 _ 를 쓰는이유 --> react 에 내장된 기능과 이름이 겹치
    const username = this.state.username.map((username, index) => {  //지 않기 위해서
          return <Admin key={index} name={username.name} age={username.age} />
          //고유의 key 값을 필요로함 ( map 을 사용할 경우 )
        })
        return username
  }
  render() {
    return {
      <div classname="App">
      	{ this.state.username ? this._renderMove() : 'loading' }
			</div>
    };
  }
}

export default App


```

### 나의 생각

​	정보를 handling 하는곳 —> App.js 
handling 된 정보를 가지고 블럭을 만드는곳 —> <{export default name }>

**#####**

정보가 handling 됫는지 확인하는법 —> state 에서 그정보가 담겨져있는지 확인
	True —> info.js 에 정보를 보내 블록을 만든후 render
    False —> preInfo.js ( 로딩파일 이나 정보처리중… 이라는 블록이 있다는 가정 ) 의 블록을 render

```javascript
{ this.state.info ? this._renderInfo() : <preInfo /> }
```

