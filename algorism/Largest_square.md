



```javascript

function solution(board)
{
    var answer = 0;
    const rowCount = [];
    let rowLength = board.length;
  
    board.forEach((el,index) => {
        let count = 0;
        rowCount.push([]);
        el.forEach( row => {
            if(row === 1) {
                count++;
            } else {
                count = 0;
            }
            rowCount[index].push(count);
        } )
    })
// 같은 row , 연속되는 왼쪽 i 의 갯수
//	[1,1,1,1] => [1,2,3,4]
// [0,1,0,1,1,0,1,1,1] => [0,1,0,1,2,0,1,2,3]
  
    rowCount.forEach((el,index) => {
      
        if(el.length - index < Math.sqrt(answer)) {
            return answer
          // column 의 갯수를 제곱한 값이
          // answer 보다 작을경우 는 따지지 않는다.
        }
      
        for(let i = el.length - 1; i >= 0; i--) {
            let sqrtAnswer = Math.sqrt(answer);
            if(sqrtAnswer > i) {
                break;
              // 왼쪽 i 의 갯수를 제곱한수가 answer 보다 작을경우
              // 생각하지 않는다.
            }
            let count = 0;
            if(el[i] > sqrtAnswer) {
                count ++;
                let filter = ( rowLength - index > el[i] ? el[i] : rowLength - index)
                for(let j = 1; j < filter; j++) {
                    let value = rowCount[index + j][i]
                    // 구하려는 정사각형이 asnwer 보다 작을경우 break 로 빠져나온다.
                    if(value > count && value > sqrtAnswer) {
                        count++;
                        if(filter > value) {
                            filter = value;
                        }
                    } else {
                        break;
                    }
                }
                let pow = Math.pow(count,2);
                if(pow > answer) {
                    answer = pow;
                }
            }
        }
    })
    return answer;
}
```
![find_sq](/Users/jb/Desktop/find_sq.jpeg)

