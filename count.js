class Count {
  constructor({countId,counting,plusId,minusId,}) {
    this.counting = document.getElementById(countId);
    this.count = counting
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEvent();                                  // addEvent func 실행
  }
  addEvent = () => {
    this.plusBtn.addEventListener('click', this.increas);
    this.minusBtn.addEventListener('click',this.descreas);
  }
  increas = () => {                       //arrow function 을 사용하지 않을경우
    this.count++;                         // this -> button 을 가르킨다.
    this.counting.innerText = this.count;
  }
  descreas = () => {
    this.count--;
    this.counting.innerText = this.count;
  }
}

const countBtn = new Count({
  countId : 'count',
  plusId : 'add',
  minusId : 'minus',
  counting : 0
})
