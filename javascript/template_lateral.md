##template lateral ?

```javascript
/* 문자를 "" , '' 이 아닌 `` 로 감싸는것 */
`template lateral 은
줄바꿈도 인식을
한다.
`
```

###template lateral 을 이용한 HTML handling

```javascript
const body = document.body;

const innerBody = `
<div class='pageHead'>
	<h1>Title</hi1>
	<div class='logo'>
		<img src=''>
	</div>
</div>
`
body.innerHTML = innerBody;
```

을 이용해서 createElement 보다 빠르고 쉽게 고칠수있다.

###template lateral 을 이용한 HTML, CSS handling

```javascript
const styled = element => {
    const el = createElement(el);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    }
}
const body = document.body;
const h1 = styled("h1")`
background-color : black;
color : blue;
`
body.innerHTML = h1;
```

