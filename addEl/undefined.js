(function() {
  const addEl = document.querySelector('.addEl')
  const body = document.body;

  const createEl = (element) => {
    const el = document.createElement(element)
    return (styled) => {
      console.log(styled);
      style = styled[0]
      el.innerHTML = "add el and style use func"
      el.style = style
      return el;
    }
  }

  const div = createEl('div')`
  background-color : blue;
  font-size : 20px;
  `

  addEl.addEventListener('click',() => {
    body.appendChild(div);
  })
})()
