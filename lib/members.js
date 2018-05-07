const memberContainer = document.querySelector('#members .members');

axios.get('https://boiling-gorge-85613.herokuapp.com/users').then(response => {
  const members = response.data.data;
  renderMembers(members);
});