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

function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

function renderMembers(members) {

  members.forEach(member => {
    const div = document.createElement('div');
    addClassesToElement(div, 'member', 'pointer');

    const img = document.createElement('img');
    img.src = member.image;
    div.appendChild(img);

    const name = document.createElement('div');
    addClassesToElement(name, 'member-label');
    name.innerHTML = member.fname;
    div.appendChild(name);

    memberContainer.appendChild(div);
  });
}