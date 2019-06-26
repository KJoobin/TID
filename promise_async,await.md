## Async , Await ??

promise . then . catch 를 조금더 간단하게? 쓰기위해 사용 ( ? );

이전에 했던 promise 코드를 가져오겠다.

```javascript
const prePromise =  () => {
	fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
  	.then(response => response.json())	//json 파일을 가져와서 가공
  	.then(json => console.log(json))		//가공된 파일을 console로 확인
	  .catch(err => console.err(err))		//err 가 있을경우 출력
}

const asyncPromise = async () => {		//async function asyncPromise() 로 사용가능
  try{
    const response = await fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    const json = await response.json();
    console.log(json);
  } catch(err) {											//err 가 있을경우
    console.log(err);
  } finally {
    console.log(`is done`);
  }
};
```

axios

### Async 를 이용한 promise all

```javascript
const asyncPromise = async () => {		//async function asyncPromise() 로 사용가능
  try{
    const [oneResponse,anotherPromise] = await Promise.all([
      fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"),
			fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')	//다른것이라 가정..
    ])
    const [oneJson,anotherJson] = await Promise.all([oneResponse.json(), anotherPromise.json()])
    console.log(oneJson);
    console.log(anotherJson);
  } catch(err) {											//err 가 있을경우
    console.log(err);
  } finally {													//비동기가 다 끝낫을 경우
    console.log(`is done`);
  }
};
```

### 주의점

만약 await 을 사용할경우 항상 async 함수를 선언한후 그 안에 작성해야한다.

만약 그게싫다면 다른 라이브러리가 많다 ( axios, …  ) 