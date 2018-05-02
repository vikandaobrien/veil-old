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


function renderMembers (members) {

  members.forEach(member => {
    const div = document.createElement('div');
    addClassesToElement(div, 'member', 'pointer');
    div.addEventListener('click', event => {
      window.location = '/member.html?id=1';
    });

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

function request(path, method = 'get', body = null) {
  let bearerToken = ''
  const token = localStorage.getItem('token')

  if(token){
    bearerToken = `Bearer ${token}`
  }

  return axios(`http://localhost:3000${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearerToken
    },
    data: body
  })
}
