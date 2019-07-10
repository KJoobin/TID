### justify-content , align-content

- justify : 기본방향 —> row

- align : 기본방향 column ( justify 와 반대 )

- option

- ```
  flex-start
  flex-end
  center
  space-between
  space-around
  ```

### justify-items, align-items

- option

- ```
  stretch
  center
  start
  end
  ```

### flex-direction

- justify 의 방향을 바꾼다 ( align 은 자동으로 반대방향으로 바뀐다 )

- option

- ```
  row;
  row-reverse;
  column;
  column-reverse;
  ```

### order

- 현재 요소의 배치 순서를 지정

- option

- ```
  order:-1
  - ~ + 
  ```

###justify-self , align-self

- 다른 요소는 그대로두고 현재 요소만 바꿈

- option

- ```
  stretch
  center
  start
  end
  ```

###flex-wrap

- 요소들을 한줄에 배치할것인지 가능한 여러행으로 나눌지 결정

- option

- ```
  nowrap;
  wrap;
  wrap-reverse
  ```

###flex-flow

- direction + wrap

- option

- ```
  flex-direction flex-wrap
  ex( row wrap), ( row-reverse wrap)
  ```

  