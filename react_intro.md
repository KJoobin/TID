## React ?

자바스크립트 웹UI 라이브러리 
—> 별도의 언어를 배우지 않아도 된다.
—> Django, nodeJs, python, ruby … 등등과 같이 사용할수 있다.

각 파트별로 작업할수있음

```javascript
function Nav() {
  return (
    <nav>
    	<ul>
    		.....
    	</ul>
    </nav>
  )
}
function Header() {
  return (
    <header>
    	<ul>
    		.....
    	</ul>
    </header>
  )
}
...
```

##준비물

### webPack

React code —> javascript code 로 변경해주는 트랜스 파일
ES6 를 모든 브라우져에서 사용할수 없기때문에 웹팩을 이용해서 변경해줘야한다.

### Babel 

webpack 이 ES6+ 코드를 ES5 코드로 트랜스파일링 하도록 도와준다.

###Sass or Scss

CSS 의 가독성과 코드 재사용을 위해 CSS 의 확장판

### React ( CRA )

create-react-app

### JSX

위의 코드를 보면 js 파일안에 html 로 코드가 작성되어 있는걸 JSX 라 한다.
react component 를 만들때 사용하는 언어

### prop-types

prop 의 type 을 체크해준다.



static propType {
key : PropType.string
}

state 를 변경하면 render 가 다시 실행된다.