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

setTimeout(() => changeOrth('LatnXMacron'), 1000)
setTimeout(() => changeOrth('Cans'), 2000)
setTimeout(() => changeOrth('Latn'), 3000)
