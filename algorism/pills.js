/*
  70세 박종수 할아버지는 매일 매일 약 반알을 먹는다.
손녀 선영이는 종수 할아버지에게 약이 N개 담긴 병을 선물로 주었다.

  첫째 날에 종수는 병에서 약 하나를 꺼낸다.
그 다음, 그 약을 반으로 쪼개서 한 조각은 먹고, 다른 조각은 다시 병에 넣는다.

  다음 날부터 종수는 병에서 약을 하나 꺼낸다.
(약은 한 조각 전체 일 수도 있고, 쪼갠 반 조각 일 수도 있다) 반 조각이라면 그 약을 먹고, 아니라면 반을 쪼개서 한 조각을 먹고, 다른 조각은 다시 병에 넣는다.

  종수는 손녀에게 한 조각을 꺼낸 날에는 W를, 반 조각을 꺼낸 날에는 H 보낸다.
손녀는 할아버지에게 받은 문자를 종이에 기록해 놓는다. 총 2N일이 지나면 길이가 2N인 문자열이 만들어지게 된다. 이때, 가능한 서로 다른 문자열의 개수는 총 몇 개일까?

 */

function solution(N) {
  const hasPills = [];
  const answer = [];
  const output = [];
  for(let i = 0; i < N; i++) {
    hasPills.push(1);
  }
  if(hasPills.length === 0) {
    return [];
  }
   onlyPills(hasPills,answer,output)
   console.log(output.length)
  // return output;
}

const onlyPills = (pills,answer,output) => {
  const newWayToAnswer = answer.slice()
  const newPills = pills.slice()
  newWayToAnswer.push("H");
  newPills.pop();
  newPills.unshift(0);
  if(newPills.includes(1)) {
    onlyPills(newPills,newWayToAnswer,output);
  }
  hasPill(newPills,newWayToAnswer,output);
}

const hasPill = (pills,answer,output) => {
  const newWayToAnswer = answer.slice();
  const newPills = pills.slice()
  newWayToAnswer.push("W");
  newPills.shift()
  if(newPills.length) {
    if(newPills.includes(0)) {
      hasPill(newPills,newWayToAnswer,output)
    }
    if(newPills.includes(1)) {
      onlyPills(newPills,newWayToAnswer,output)
    }
  } else {
    if(output.includes(newWayToAnswer)) {
      console.log("중복")
    } else {
      console.log(newWayToAnswer);
      output.push(newWayToAnswer);
    }
  }
}

console.log(solution(16));
