## promise ?

### Asyc ?

순서대로 실행되는 것이 아니다. = 비동기

```javascript
const promise1 = new Promise( ( resolve, reject ) => {
    //resolve -> 결과값
    //reject -> err
})

promise1
    .then( result => {
    //결과값을 얻은뒤 할 행동
})
    .catch( err => {
    //err를 잡는다.
})
console.log(promise1)		//Promise {<pending>} (결과값을 얻지못해 대기중)
```

### chaining promises

처리한 데이터를 두번이상 처리를 해줘야할때. ( promise 를 2번 이상 써야할때 )

```javascript
const mult = new Promise( (resolve, reject) => {
    resolve(2)
})
mult
    .then( result => result * 2)
    .then( result => result * 2)
    .then( result => result * 2)
    .then( result => result * 2)
    .then( result => result * 2)
    .then( result => result * 2)
    .then( result => console.log(result));
    .catch( err => console.log(err));		//err 가 날경우 catch 해준다.
/* 와 같이 이어서 쓸수 있음 */
```

### promise all

데이터를 여러번 처리하는것이 아닌 여러 데이터를 받아야할경우

```javascript
const p1 = new Promise( (resolve, reject) => {
    //처리
})
const p2 = new Promise( (resolve, reject) => {
    //처리
})
const p3 = new Promise( (resolve, reject) => {
    //처리
})

const motherPromise = Promise.all([p1,p2,p3]);  //.all(모두 중요) <-> .race (가장 빠른것 한개만 중요 )
motherPromise
.then(result => console.log(result))			//[p1결과, p2결과, p3결과] 가 arr로 출력
.catch(err => console.log(err))					//p1,p2,p3 중 1개라도 err 가 있을경우
/* 여러개의 promise 를 돌리고 에러가 있는지 판단할때 사용하면 좋다. */
```

### promise race

여러데이터 결과값중 ( resolve or reject) 가장 빠른 값 1개만 필요할경우

### promise finally

결과와는 상관없이 promise 가 끝낫을때 실행됨.

```javascript
const p1 = new Promise( (resolve, reject) => {
    //처리
})
  .then(result => result)
  .catch(err => err)
  .finally(() => console.log('is done!'))
```

### 실전 예제

fetch를 이용한 예

```javascript
fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
  .then(response => response.json())	//json 파일을 가져와서 가공
  .then(json => console.log(json))		//가공된 파일을 console로 확인
  .catch(err => console.err(err))		//err 가 있을경우 출력
```

