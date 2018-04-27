const memberContainer = document.querySelector('#members .members');

axios.get('http://localhost:3000/users').then(response => {
  const members = response.data.data;
  renderMembers(members);
});