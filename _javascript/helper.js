function empty (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
}

function addClassesToElement (element, ...classes) {
  return classes.reduce((acc, ele) => {
    element.classList.add(ele);
    return acc;
  }, element);
}

function getQueryVariable (variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
    for (let i = 0 ; i < vars.length; i++) {
      const pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
  return false;
}
