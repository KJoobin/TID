### Scope 의 활용

##### 예시

1. setTImeOut 을 이용한 예시

   ```javascript
   function makeCake(flavor) {
       return function() {
           setTimeOut(function() {
               console.log(`make ${flavor} cake`)
           },1000);
       }
   }
   var banana = makeCake('banana');
   banana()							//1초뒤 "make banana cake" 
   ```

2. private 변수 확인

   ```javascript
   function secret(msg) {
       return {
           secMsg() {
               console.log(msg);
           }
       }
   }
   var secretCode = secret('CSS is amaging :)');
   secretCode.secMsg();							//CSS is amaging 을 반환
   ```

