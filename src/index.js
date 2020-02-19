document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.querySelectorAll('[data-change-orth]')

  for (let button of buttons) {
    let orth = button.dataset.changeOrth;
    button.addEventListener('click', function () {
      changeOrth(orth)
    })
  }
})

function changeOrth (which) {
  let elements = document.querySelectorAll('[data-orth]')
  console.assert(['Cans', 'Latn', 'LatnXMacron'].includes(which))

  let attr = `orth${which}`;
  for (let el of elements) {
    let newText = el.dataset[attr];
    if (newText) {
      el.innerText = newText;
    }
  }
}
