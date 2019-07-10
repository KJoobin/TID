### grid-column ( row ) - start ( end )

- **grid column (row ) - start **: gird 의 시작부분을 지정한다.

- **grid column( row) - end** : start ~ end 미만 까지 선택.

- option

- ```
  음수 ~ 양수;
  if span --> end {
  start number --> 넓이
  }
  if span --> start {
  end number --> 넓이
  }
  grid-column : startInt/endInt; 로 한번에 설정 가능
  
  grid-area : row S/ col S/ row E/ col E
  ```

### order

- **flex 와 동일**

### grid-template

- row 와 column 을 원하는 크기만큼 나눌수 있다.

- ```
  repeat( 반복Int, 비율)
  fr 분수( fraction ) 
  grid-template : rows / columns
  ```

  