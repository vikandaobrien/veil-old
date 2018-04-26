function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
}

function addClassesToElement(element, ...classes) {
  return classes.reduce((acc, ele) => {
    element.classList.add(ele);
    return acc;
  }, element);
}