```javascript
import  React, { useState } from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  const [ count, setCount ] = useState(1);
  const increment = () => setCount( count + 1 );
  const decrement = () => setCount( count - 1 );

  return (
    <div className="App">
      <h1>Hello CodeSandbox {count}</h1>
      <button onClick={increment}></button>
      <button onClick={decrement}></button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

class NotHook extends React.Component {
  state = {
    item: 0
  }
  render(){
    const { item } = this.state
    return (
      <div className="App">
        <h1>Hello CodeSandbox {item}</h1>
        <button onClick={this.increment}></button>
        <button onClick={this.decrement}></button>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }

   increment = () => {
     this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  }
   decrement = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
    }

}

const rootElement = document.getElementById("root");
// render(<App />, rootElement);
render(<NotHook />, rootElement);

```

### hook vs react

**react**

```javascript
class App extends React.Component {
	state = {
	item:1
	}
	render(
  	const item = state.item;
    return {
        <div className="App">
      <h1>Hello CodeSandbox {item}</h1>
      <button onClick={this.increment}></button>
      <button onClick={this.decrement}></button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    }
  )
  increment () => {
    this.setState(state => {
			return {
        item = state.item + 1	
      }
		})
  }
  decrement () => {
    this.setState(state => {
      return{
        item = state.item - 1
      }
    })
  }
}
```

**hook**

```javascript
function App() {
	const [item, setItem] = useState(1)
  const increment = setItem(item + 1);
  const decrement = setItem(item - 1);
  return (
     <div className="App">
      <h1>Hello CodeSandbox {count}</h1>
      <button onClick={increment}></button>
      <button onClick={decrement}></button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}
```



## useState

```javascript
const [value, setValue] = useState(초기값);
// 을 통해서 사용가능 
```



