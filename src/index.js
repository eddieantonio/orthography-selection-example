export function changeOrth () {
  let elements = document.querySelectorAll('[data-orth]')
  for (let el of elements) {
    el.innerText = el.dataset.orthCans;
  }
}

setTimeout(changeOrth, 1)
