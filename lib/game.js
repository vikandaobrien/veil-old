const gameId = getQueryVariable('id');
const gameImage = document.querySelector('.game-image');
const gameTitle = document.querySelector('#game-info');
const memberContainer = document.querySelector('.members');

axios.get(`http://localhost:3000/games/${gameId}`).then(response => {
  const game = response.data.data[0];
  document.title = `Veil | ${game.name}`;
  singleGame(game);
  renderMembers(game.users);
});

function singleGame(game) {
  const img = document.createElement('img');
  img.src = game.image;
  gameImage.appendChild(img);

  const h1 = document.createElement('h1');
  addClassesToElement(h1, 'title', 'is-1', 'has-text-centered');
  h1.innerHTML = game.name;
  gameTitle.appendChild(h1);

  const div = document.createElement('div');
  addClassesToElement(div, 'info', 'has-text-centered');

  const a = document.createElement('a');
  a.innerHTML = `<a><span class="fa-icon"><i class="fas fa-server"></i></span> ${game.server}</a>`;
  div.appendChild(a);

  gameTitle.appendChild(div);
}