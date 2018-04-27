const memberContainer = document.querySelector('#members .members');

axios.get('http://localhost:3000/users').then(response => {
  const members = response.data.data;
  renderMembers(members);
});

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